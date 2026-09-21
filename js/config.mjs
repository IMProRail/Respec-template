import { loadRespecWithConfiguration } from "https://improrail.github.io/respec-assets/js/prorail-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2025-11-01",
  publishVersion: "0.0.1",

  // TODO: Verwijder voordat de release plaats vindt
  //latestVersion: "https://github.com/logius-standaarden/respec-template/",
  prevVersion: [],

  editors:
    [
      {
        name: "ProRail",
        company: "ProRail",
        companyURL: "https://prorail.nl",
      }
    ],
  authors:
    [
      {
        name: "ProRail",
        company: "ProRail",
        companyURL: "https://prorail.nl",
      }
    ],
  github: "https://github.com/IMProRail/ReSpec-template",
});
