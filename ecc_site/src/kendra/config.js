import { KendraClient, ListDataSourcesCommand } from "@aws-sdk/client-kendra"; // ES Modules import

export default async function Query() {
  const client = new KendraClient({ region: "ap-southeast-2" });
  const input = {
    // ListDataSourcesRequest
    IndexId: "nMVNi2kJZAXTBd/usb0aEH9Azie6orgVWqiJD09y", // required
    MaxResults: Number("int"),
  };
  const command = new ListDataSourcesCommand(input);
  const response = await client.send(command);
  console.log(response);
}
