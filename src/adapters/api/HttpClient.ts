export class HttpClient {
    private readonly baseUrl: string;
    private readonly defaultOptions: RequestInit;

    constructor(baseUrl = '', defaultOptions: RequestInit = {}) {
        this.baseUrl = baseUrl;
        this.defaultOptions = defaultOptions;
    }

    private async request(
        endpoint: string,
        options: RequestInit,
        queryParams?: Record<string, any>,
        timeout = 5000
    ): Promise<Response> {
        const url = this.appendQueryParams(`${this.baseUrl}${endpoint}`, queryParams);
        const controller = new AbortController();
        const signal = controller.signal;
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, {
                ...this.defaultOptions,
                ...options,
                signal,
            });

            clearTimeout(timeoutId);
            this.validateStatusCode(response);

            return response;
        } catch (error: any) {
            if (error.name === 'AbortError') {
                throw new Error('Timeout: La solicitud tardó demasiado y fue cancelada.');
            }
            throw new Error(`Error de conexión o solicitud: ${error.message}`);
        }
    }

    async get(endpoint: string, queryParams?: Record<string, any>, timeout?: number): Promise<any> {
        const response = await this.request(
            endpoint,
            {method: 'GET'},
            queryParams,
            timeout
        );
        return this.parseResponse(response);
    }

    async post(endpoint: string, body: any, timeout?: number): Promise<any> {
        const response = await this.request(
            endpoint,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            },
            undefined,
            timeout
        );
        return this.parseResponse(response);
    }

    async put(endpoint: string, body: any, timeout?: number): Promise<any> {
        const response = await this.request(
            endpoint,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body),
            },
            undefined,
            timeout
        );
        return this.parseResponse(response);
    }

    async delete(endpoint: string, queryParams?: Record<string, never>, timeout?: number): Promise<any> {
        const response = await this.request(
            endpoint,
            {method: 'DELETE'},
            queryParams,
            timeout
        );
        return this.parseResponse(response);
    }

    private appendQueryParams(
        url: string,
        queryParams?: Record<string, any>
    ): string {
        if (!queryParams) {
            return url;
        }

        const urlObject = new URL(url, this.baseUrl || undefined);
        const params = new URLSearchParams();

        Object.entries(queryParams).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                params.append(key, String(value));
            }
        });

        urlObject.search = params.toString();
        return urlObject.toString();
    }

    private validateStatusCode(response: Response): void {
        if (response.status >= 400 && response.status < 500) {
            throw new Error(`Client Error: ${response.status} ${response.statusText}`);
        } else if (response.status >= 500) {
            throw new Error(`Server Error: ${response.status} ${response.statusText}`);
        }
    }

    private async parseResponse(response: Response): Promise<any> {
        const contentType = response.headers.get('Content-Type');
        if (contentType?.includes('application/json')) {
            return await response.json();
        } else if (contentType?.includes('text/plain')) {
            return await response.text();
        } else if (contentType?.includes('application/octet-stream')) {
            return await response.arrayBuffer();
        }
        return response;
    }
}