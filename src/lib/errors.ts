export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode = 500,
    public readonly expose = false,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function toSafeError(error: unknown, fallback: string) {
  if (error instanceof AppError) {
    return {
      message: error.expose ? error.message : fallback,
      statusCode: error.statusCode,
    };
  }

  return {
    message: fallback,
    statusCode: 500,
  };
}
