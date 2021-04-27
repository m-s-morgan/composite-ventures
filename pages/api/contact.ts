import type { NextApiRequest, NextApiResponse } from 'next';
import { config } from '../../config';

const MailGun: any = require('mailgun-js');
const MailGen: any = require('mailgen');
const mailgun: any = MailGun({
  apiKey: config.smtp.apiKey,
  domain: config.smtp.domain,
});
const mailGenerator: any = new MailGen({
  theme: 'default',
  product: {
      // Appears in header & footer of e-mails
      name: 'Starpath Ventures',
      link: 'http://starpathventures.com',
      // Optional product logo
      logo: `http://starpathventures.com/logos/logo_dark.png`,
      copyright: `Copyright © 2021 Starpath Ventures. All rights reserved.`
  }
});

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body = req.body;
    const keys = Object.keys(body);

    if (!!keys && keys.length > 0) {
      let message = '';

      keys.forEach((k) => {
        let cKey: string;

        if (!!k) {
          cKey = k.slice(0, 1).toUpperCase() + k.slice(1);
        } else {
          cKey = k;
        }

        message += `
${cKey}: ${body[k]}  <br>
`;
      });

      message += `
<br>
`;

      const emailBody = {
        body: <any>{
          name: config.smtp.toName,
          intro: message,
        }
      };

      mailgun.messages().send({
        subject: 'Starpath Contact Form',
        to: config.smtp.to,
        from: config.smtp.from,
        html: mailGenerator.generate(emailBody),
        text: mailGenerator.generatePlaintext(emailBody),
      });

      res.status(200).send({});
      return;
    }
  }

  res.status(404).send({});
}
