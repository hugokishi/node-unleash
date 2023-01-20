const Unleash = require("unleash-client");

let unClient;

/**
 *
 * @param {string} flagName
 * @param {Unleash.Context} context
 */
const isEnabled = (flagName, context) => {
  const env = process.env.NODE_ENV;

  const composedName = env !== "production" ? `${env}-${flagName}` : flagName;

  return unClient.isEnabled(composedName, context);
};

/**
 *   @param InitUnleashClient {object}
 *   @param InitUnleashClient.url {string}
 *   @param InitUnleashClient.appName {string}
 *   @param InitUnleashClient.authorizationToken {string}
 *   @param InitUnleashClient.environment {string}
 */
const InitUnleashClient = ({
  url,
  appName,
  authorizationToken,
  environment,
}) => {
  if (!unClient) {
    unClient = Unleash.initialize({
      url,
      appName,
      environment,
      customHeaders: { Authorization: authorizationToken },
    });
  }

  return { unClient };
};

module.exports = { InitUnleashClient, isEnabled };
