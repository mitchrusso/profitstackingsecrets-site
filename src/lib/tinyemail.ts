const tinyEmailAccountId = "e4ea2f69-5822-4136-a02b-d0045cabb18f";
const tinyEmailFormId = "60b78d12-156e-4698-a7e9-4e506738047f";

const tinyEmailSiteOrigin = process.env.TINYEMAIL_SITE_ORIGIN || "https://mitchrusso.com";
const tinyEmailFormReferer =
  process.env.TINYEMAIL_FORM_REFERER || "https://mitchrusso.com/profit-stacking-tinyemail-form-host/";

const tinyEmailEndpoint = `https://api-form.tinyemail.com/ext/formservice/form-provider/${tinyEmailAccountId}/${tinyEmailFormId}`;

type TinyEmailSubscriber = {
  firstName: string;
  lastName?: string;
  email: string;
};

export function splitName(name: string) {
  const nameParts = name.trim().split(/\s+/).filter(Boolean);
  const firstName = nameParts.shift() || name.trim();

  return {
    firstName,
    lastName: nameParts.join(" "),
  };
}

export async function enrollTinyEmailSubscriber(subscriber: TinyEmailSubscriber) {
  return fetch(tinyEmailEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: tinyEmailSiteOrigin,
      Referer: tinyEmailFormReferer,
    },
    body: JSON.stringify(subscriber),
  });
}
