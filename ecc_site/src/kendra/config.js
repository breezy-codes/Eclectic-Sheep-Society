import { KendraClient, RetrieveCommand } from "@aws-sdk/client-kendra"; // ES Modules import

export default async function Query() {
  const client = new KendraClient({ region: "ap-southeast-2" });
  const input = {
    // RetrieveRequest
    IndexId: "d4cfc836-93f0-4e40-843d-872444bacdf8", // required
    QueryText: "Effects of alcoholism", // required

    // AttributeFilter: {
    //   // AttributeFilter
    //   AndAllFilters: [
    //     // AttributeFilterList
    //     {
    //       AndAllFilters: ["<AttributeFilter>"],
    //       OrAllFilters: ["<AttributeFilter>"],
    //       NotFilter: "<AttributeFilter>",
    //       EqualsTo: {
    //         // DocumentAttribute
    //         Key: "STRING_VALUE", // required
    //         Value: {
    //           // DocumentAttributeValue
    //           StringValue: "STRING_VALUE",
    //           StringListValue: [
    //             // DocumentAttributeStringListValue
    //             "STRING_VALUE",
    //           ],
    //           LongValue: Number("long"),
    //           DateValue: new Date("TIMESTAMP"),
    //         },
    //       },
    //       ContainsAll: {
    //         Key: "STRING_VALUE", // required
    //         Value: {
    //           StringValue: "STRING_VALUE",
    //           StringListValue: ["STRING_VALUE"],
    //           LongValue: Number("long"),
    //           DateValue: new Date("TIMESTAMP"),
    //         },
    //       },
    //       ContainsAny: {
    //         Key: "STRING_VALUE", // required
    //         Value: {
    //           StringValue: "STRING_VALUE",
    //           StringListValue: ["STRING_VALUE"],
    //           LongValue: Number("long"),
    //           DateValue: new Date("TIMESTAMP"),
    //         },
    //       },
    //       GreaterThan: {
    //         Key: "STRING_VALUE", // required
    //         Value: {
    //           StringValue: "STRING_VALUE",
    //           StringListValue: ["STRING_VALUE"],
    //           LongValue: Number("long"),
    //           DateValue: new Date("TIMESTAMP"),
    //         },
    //       },
    //       GreaterThanOrEquals: {
    //         Key: "STRING_VALUE", // required
    //         Value: {
    //           StringValue: "STRING_VALUE",
    //           StringListValue: ["STRING_VALUE"],
    //           LongValue: Number("long"),
    //           DateValue: new Date("TIMESTAMP"),
    //         },
    //       },
    //       LessThan: "<DocumentAttribute>",
    //       LessThanOrEquals: "<DocumentAttribute>",
    //     },
    //   ],
    //   OrAllFilters: ["<AttributeFilter>"],
    //   NotFilter: "<AttributeFilter>",
    //   EqualsTo: "<DocumentAttribute>",
    //   ContainsAll: "<DocumentAttribute>",
    //   ContainsAny: "<DocumentAttribute>",
    //   GreaterThan: "<DocumentAttribute>",
    //   GreaterThanOrEquals: "<DocumentAttribute>",
    //   LessThan: "<DocumentAttribute>",
    //   LessThanOrEquals: "<DocumentAttribute>",
    // },
    // RequestedDocumentAttributes: [
    //   // DocumentAttributeKeyList
    //   "STRING_VALUE",
    // ],
    // DocumentRelevanceOverrideConfigurations: [
    //   // DocumentRelevanceOverrideConfigurationList
    //   {
    //     // DocumentRelevanceConfiguration
    //     Name: "STRING_VALUE", // required
    //     Relevance: {
    //       // Relevance
    //       Freshness: true || false,
    //       Importance: Number("int"),
    //       Duration: "STRING_VALUE",
    //       RankOrder: "ASCENDING" || "DESCENDING",
    //       ValueImportanceMap: {
    //         // ValueImportanceMap
    //         "<keys>": Number("int"),
    //       },
    //     },
    //   },
    // ],
    // PageNumber: Number("int"),
    // PageSize: Number("int"),
    // UserContext: {
    //   // UserContext
    //   Token: "STRING_VALUE",
    //   UserId: "STRING_VALUE",
    //   Groups: [
    //     // Groups
    //     "STRING_VALUE",
    //   ],
    //   DataSourceGroups: [
    //     // DataSourceGroups
    //     {
    //       // DataSourceGroup
    //       GroupId: "STRING_VALUE", // required
    //       DataSourceId: "STRING_VALUE", // required
    //     },
    //   ],
    // },
  };
  const command = new RetrieveCommand(input);
  const response = await client.send(command);
  console.log(response);
}
