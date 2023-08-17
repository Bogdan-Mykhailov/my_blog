import {PATH} from "@/constants";

export async function sendContactData(contactDetails) {
  const response = await fetch(`${PATH.API}${PATH.CONTACT}`, {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}
