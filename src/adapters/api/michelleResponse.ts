export class MichelleResponse {
    private readonly statusCode: number;
    private readonly body: ReadableStream<Uint8Array> | null;
    private contentType: string | null;

    constructor(response: Response) {
        this.statusCode = response.status;
        this.body = response.body;
        this.contentType = response.headers.get('Content-Type');
        this.handleErrors();
    }

    private handleErrors(): void {
        if (this.statusCode >= 400 && this.statusCode < 500) {
            throw new Error(`Client Error: ${this.statusCode}`);
        } else if (this.statusCode >= 500) {
            throw new Error(`Server Error: ${this.statusCode}`);
        }
    }

    async parseBody(): Promise<any> {
        if (!this.body) {
            return null;
        }

        if (this.contentType?.includes('application/json')) {
            return await new Response(this.body).json();
        } else if (this.contentType?.includes('text/plain')) {
            return await new Response(this.body).text();
        } else if (this.contentType?.includes('application/octet-stream')) {
            return await new Response(this.body).arrayBuffer();
        }
        // Retornar el cuerpo como "ReadableStream" en caso de que no haya un tipo conocido
        return this.body;
    }
}