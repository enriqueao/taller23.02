interface Client {
  token: string;
}

export class AuthService {
  #client: Client;

  private static instance: AuthService;
  private static authToken: string;

  private constructor(client: Client) {
    this.#client = client;
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      const client = createClient({
        clientId: config.auth.clientId,
        clientSecret: config.auth.clientSecret
      });
      AuthService.instance = new AuthService(client);
    }

    return AuthService.instance;
  }

  static async generateToken(config: GenerateTokenInput): Promise<string> {
    if (!AuthService.instance) {
      this.getInstance();
    }
    const verify = await this.verifyToken({
      tokenRequiredScopes: config.scopes,
      token: AuthService.authToken
    });
    if (!verify) {
      const tokenRes = await AuthService.instance.client.generateToken(config);
      AuthService.authToken = tokenRes.tokenHolder.getToken();
    }

    return AuthService.authToken;
  }

  static async verifyToken(input: ValidateTokenInput): Promise<boolean> {
    if (!AuthService.authToken) {
      return false;
    }
    return AuthService.instance.client
      .validateToken(input)
      .then(() => true)
      .catch(() => false);
  }

  get client(): Client {
    return this.#client;
  }
}




AuthService.generateToken({
  scopes: ['read', 'write'],
  client: AuthService.getInstance()
})