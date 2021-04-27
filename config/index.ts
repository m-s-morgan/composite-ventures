export const env = process.env.NODE_ENV || 'development';
export const config: IConfig = {
    smtp: {
        apiKey: process.env.MAILGUN_KEY,
        domain: process.env.MAILGUN_DOMAIN,
        from: process.env.MAILGUN_FROM,
        to: process.env.MAILGUN_TO,
        toName: process.env.MAILGUN_TONAME,
    },
};

try {
    const cfg = require('./' + env + '.json');

    if (!!cfg) {
        config.smtp.apiKey = cfg.smtp.apiKey;
        config.smtp.domain = cfg.smtp.domain;
        config.smtp.from = cfg.smtp.from;
        config.smtp.to = cfg.smtp.to;
        config.smtp.toName = cfg.smtp.toName;
    }
} catch (e) {}

interface IConfig {
    smtp: {
        from: string;
        to: string;
        toName: string;
        apiKey: string;
        domain: string;
    };
}