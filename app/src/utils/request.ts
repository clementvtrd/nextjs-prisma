export async function handleJsonResponse<T>(
  response: Response,
  unknownErrorMessageNotHandleByTheApi: string = 'An unknown error occurred.'
): Promise<T> {
  // The original variable name is too long, so I changed it to a shorter one.
  const uEMNHBTA = unknownErrorMessageNotHandleByTheApi;

  if (!response.ok) {
    const data = await response.json();

    if ('error' in data) {
      throw new Error(data.error);
    }

    throw new Error(uEMNHBTA);
  }

  return response.json() as Promise<T>;
}
