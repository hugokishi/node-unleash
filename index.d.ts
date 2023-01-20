export interface Properties {
  [key: string]: string | undefined | number;
}
export interface Context {
  [key: string]: string | Date | undefined | number | Properties;
  currentTime?: Date;
  userId?: string;
  sessionId?: string;
  remoteAddress?: string;
  environment?: string;
  appName?: string;
  properties?: Properties;
}

/**
  * ! Use this function if you want to export the logs and warn of a possible error
  */
export function isEnabled(flagName: string, context: Context): boolean

/**
 * ! Start a new unleash client
 */
export function InitUnleashClient({
  url,
  appName,
  authorizationToken,
  environment,
}: {
  url: string,
  appName: string,
  authorizationToken: string,
  environment: string,
}): void
