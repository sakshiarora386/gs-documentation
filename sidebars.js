/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: "category",
      label: "1. Microservices Framework",
      items: [
        {
          type: "category",
          label: "1. Introduction",
          items: [
            {
              type: "doc",
              label: "1.1. Overview",
              id: "microservices-framework/introduction/overview",
            },
            {
              type: "doc",
              label: "1.2. Tenets",
              id: "microservices-framework/introduction/tenets",
            },
            {
              type: "doc",
              label: "1.3. Design Principles",
              id: "microservices-framework/introduction/design-principles",
            },
            {
              type: "doc",
              label: "1.4. Guard Rails",
              id: "microservices-framework/introduction/guard-rails",
            },
          ],
        },

        // {
        //   type: "doc",
        //   label: "1. Introduction",
        //   id: "microservices-framework/introduction",
        // },
        // {
        //   type: "doc",
        //   label: "2. Tenets and Design Principles",
        //   id: "microservices-framework/tenets-and-design-principles",
        // },
        {
          type: "category",
          label: "2. Getting started",
          items: [
            {
              type: "doc",
              label: "2.1. Overview",
              id: "microservices-framework/getting-started/overview",
            },
            {
              type: "doc",
              label: "2.2. Guide",
              id: "microservices-framework/getting-started/guide",
            },
            {
              type: "doc",
              label: "2.3. Advance Guide",
              id: "microservices-framework/getting-started/advance-guide",
            },
          ],
        },
        {
          type: "doc",
          label: "3. CLI",
          id: "microservices-framework/CLI",
        },
        {
          type: "category",
          label: "4. Event sources",
          items: [
            {
              type: "doc",
              label: "4.1. Overview",
              id: "microservices-framework/event-sources/overview",
            },
            {
              type: "doc",
              label: "4.2. Event Schema",
              id: "microservices-framework/event-sources/event-schema",
            },

            {
              type: "category",
              label: "4.3. Event Types",
              items: [
                {
                  type: "doc",
                  label: "4.3.1. Overview",
                  id: "microservices-framework/event-sources/event-types/overview",
                },
                {
                  type: "doc",
                  label: "4.3.2. Http Events",
                  id: "microservices-framework/event-sources/event-types/http-events",
                },
                {
                  type: "doc",
                  label: "4.3.3. Cron Events",
                  id: "microservices-framework/event-sources/event-types/cron-events",
                },
                {
                  type: "doc",
                  label: "4.3.4. Kafka Events",
                  id: "microservices-framework/event-sources/event-types/kafka-events",
                },
                {
                  type: "doc",
                  label: "4.3.5. Apollo Graphql Events",
                  id: "microservices-framework/event-sources/event-types/graphql-events",
                },
              ],
            },
            {
              type: "category",
              label: "4.4. Validations",
              items: [
                {
                  type: "doc",
                  label: "4.4.1. Schema Validation",
                  id: "microservices-framework/event-sources/validations/schema-validation",
                },
                {
                  type: "doc",
                  label: "4.4.2. Validation Error",
                  id: "microservices-framework/event-sources/validations/validation-error",
                },
              ],
            },
            // {
            //   type: "doc",
            //   label: "4.4. Schema Validation",
            //   id: "microservices-framework/event-sources/schema-validation"
            // },
            {
              type: "doc",
              label: "4.5. Create custom event source",
              id: "microservices-framework/event-sources/create-custom-event-source",
            },

            {
              type: "doc",
              label: "4.6. Create event source plugin",
              id: "microservices-framework/event-sources/create-eventsource-plugin",
            },
            {
              type: "doc",
              label: "4.7. List of plugins",
              id: "microservices-framework/event-sources/event-source-plugins",
            },
            // {
            //   type: "doc",
            //   label: "4.8. Validation Error",
            //   id: "microservices-framework/event-sources/on-validation-error"
            // },
            // {
            //   type: "doc",
            //   label: "4.7. Swagger Specs",
            //   id: "microservices-framework/event-sources/swagger-specs"
            // },
          ],
        },
        {
          type: "category",
          label: "5. Workflows",
          items: [
            {
              type: "doc",
              label: "5.1. Overview",
              id: "microservices-framework/workflows/overview",
            },
            {
              type: "doc",
              label: "5.2. Native language workflows",
              id: "microservices-framework/workflows/native-language-functions",
            },
            {
              type: "category",
              label: "5.3. Yaml workflows",
              // id: "microservices-framework/workflows/yaml-dsl-functions"
              items: [
                {
                  type: "doc",
                  label: "5.3.1. Overview",
                  id: "microservices-framework/workflows/yaml-workflows/overview",
                },
                {
                  type: "doc",
                  label: "5.3.2. Workflow DSL",
                  id: "microservices-framework/workflows/yaml-workflows/workflow-dsl",
                },
                {
                  type: "doc",
                  label: "5.3.3. Inbuilt workflows",
                  id: "microservices-framework/workflows/yaml-workflows/inbuilt-workflows",
                },
              ],
            },
            // {
            //   type: "doc",
            //   label: "5.3. Custom workflows",
            //   id: "workflows/custom_workflows"
            // },

            // {
            //   type: "doc",
            //   label: "5.4. Retry",
            //   id: "workflows/retry"
            // },
          ],
        },
        {
          type: "category",
          label: "6. DataSources",
          items: [
            {
              type: "doc",
              label: "6.1. Overview",
              id: "microservices-framework/datasources/overview",
            },
            {
              type: "doc",
              label: "6.2. Create Custom DataSource",
              id: "microservices-framework/datasources/create-custom-datasource",
            },
            {
              type: "doc",
              label: "6.3. Create DataSource Plugin",
              id: "microservices-framework/datasources/create-datasource-plugin",
            },
            {
              type: "doc",
              label: "6.4. List of Plugins",
              id: "microservices-framework/datasources/list-of-plugins",
            },
            {
              type: "doc",
              label: "6.5. Caching",
              id: "microservices-framework/datasources/caching",
            },
          ],
        },
        // {
        //   type: "category",
        //   label: "7. Authentication",
        //   items: [
        //     {
        //       type: "doc",
        //       label: "7.1. Overview",
        //       id: "authentication/Overview"
        //     },
        //     {
        //       type: "doc",
        //       label: "7.2. Configuration",
        //       id: "authentication/configuration"
        //     },
        //   ],
        // },
        {
          type: "category",
          label: "7. Authentication",
          items: [
            {
              type: "doc",
              label: "7.1.Overview",
              id: "microservices-framework/authentication/overview",
            },
            {
              type: "doc",
              label: "7.2.JWT Authentication",
              id: "microservices-framework/authentication/jwt-authentication",
            },
            {
              type: "doc",
              label: "7.3.Custom Authentication",
              id: "microservices-framework/authentication/custom-authentication",
            },
          ],
        },
        {
          type: "category",
          label: "8. Authorization",
          items: [
            {
              type: "doc",
              label: "8.1.Overview",
              id: "microservices-framework/authorization/overview",
            },
            {
              type: "doc",
              label: "8.2.Authz Usecases",
              id: "microservices-framework/authorization/authz-usecases",
            },
          ],
        },
        {
          type: "category",
          label: "9. Configs and Mappings",
          items: [
            {
              type: "doc",
              label: "9.1. Config",
              id: "microservices-framework/config-and-mappings/config",
            },
            {
              type: "doc",
              label: "9.2. Mappings",
              id: "microservices-framework/config-and-mappings/mappings",
            },
          ],
        },
        {
          type: "category",
          label: "10. Inline scripting",
          items: [
            {
              type: "doc",
              label: "10.1. Overview",
              id: "microservices-framework/inline-scripting/overview",
            },
            {
              type: "doc",
              label: "10.2. Script Plugins",
              id: "microservices-framework/inline-scripting/script-plugins",
            },
          ],
        },
        {
          type: "doc",
          label: "11. VScode extention",
          id: "microservices-framework/vscode-extension/language-tools",
        },
        {
          type: "category",
          label: "12. Telemetry",
          items: [
            {
              type: "doc",
              label: "12.1. Overview",
              id: "microservices-framework/telemetry/overview",
            },
            {
              type: "doc",
              label: "12.2. Configuration",
              id: "microservices-framework/telemetry/configuration",
            },
            {
              type: "doc",
              label: "12.3. Logging",
              id: "microservices-framework/telemetry/logging",
            },
            {
              type: "doc",
              label: "12.4. Custom metrics and traces",
              id: "microservices-framework/telemetry/custom-metrics",
            },
          ],
        },
      ],

      // {
      //   type: "doc",
      //   label: "1. Introduction",
      //   id: "introduction",
      // },
      // {
      //   type: "doc",
      //   label: "2. Design Principles",
      //   id: "design_principles",
      // },
      // {
      //   type: "category",
      //   label: "3. Getting started",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "3.1. Overview",
      //       id: "getting-started/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "3.2. Sample project",
      //       id: "getting-started/create-hello-world"
      //     },
      //     {
      //       type: "doc",
      //       label: "3.3. Blog project",
      //       id: "getting-started/create-blog-project"
      //     },
      //     // {
      //     //   type: "doc",
      //     //   label: "3.4. Godspeed on Existing project",
      //     //   id: "getting-started/gs_on_existing_proj"
      //     // }
      //   ]
      // },
      // {
      //   type: "category",
      //   label: "4. Event Sources",
      //   items: [
      //     {
      //       type: "category",
      //       label: "4.1. Events",
      //       items: [
      //         {
      //           type: "doc",
      //           label: "4.1.1. Overview",
      //           id: "events/overview"
      //         },
      //       ],
      //     },
      //     {
      //       type: "doc",
      //       label: "4.2. Overview",
      //       id: "event-sources/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "4.3. Event Source Plugins",
      //       id: "event-sources/event_source_plugins"
      //     },
      //     {
      //       type: "doc",
      //       label: "4.4. Create Your Event Source",
      //       id: "event-sources/create-your-event-source"
      //     },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "5. Workflows/Functions",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "5.1. Overview",
      //       id: "workflows/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "5.2. Custom workflows",
      //       id: "workflows/custom_workflows"
      //     },
      //     {
      //       type: "doc",
      //       label: "5.3. Inbuilt workflows",
      //       id: "workflows/inbuilt_workflows"
      //     },
      //     // {
      //     //   type: "doc",
      //     //   label: "5.4. Retry",
      //     //   id: "workflows/retry"
      //     // },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "6. Data Sources",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "6.1. Overview",
      //       id: "data_sources/overview"
      //     },
      //     {
      //       type: "doc",
      //       label: "6.2. Data source plugins",
      //       id: "data_sources/datasource_plugins"
      //     },
      //     {
      //       type: "doc",
      //       label: "6.3. Create Your data source",
      //       id: "data_sources/create_your_data_source"
      //     },
      //   ],
      // },
      // // {
      // //   type: "category",
      // //   label: "7. Authentication",
      // //   items: [
      // //     {
      // //       type: "doc",
      // //       label: "7.1. Overview",
      // //       id: "authentication/Overview"
      // //     },
      // //     {
      // //       type: "doc",
      // //       label: "7.2. Configuration",
      // //       id: "authentication/configuration"
      // //     },
      // //   ],
      // // },
      // {
      //   type: "category",
      //   label: "7. Authorization",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "7.1. Overview",
      //       id: "authorization/overview"
      //     },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "8. Config",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "8.1. Overview",
      //       id: "config/overview"
      //     },
      //   ],
      // },
      // {
      //   type: "category",
      //   label: "9. Caching",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "9.1. Overview",
      //       id: "caching/overview"
      //     },
      //   ],
      // },
      // {
      //   type: "doc",
      //   label: "10. CLI",
      //   id: "CLI"
      // },
      // {
      //   type: "doc",
      //   label: "11. Language Tools",
      //   id: "language_tools"
      // },
      // {
      //   type: "category",
      //   label: "12. Telemetry",
      //   items: [
      //     {
      //       type: "doc",
      //       label: "12.1. Overview",
      //       id: "telemetry/overview"
      //     },
      //   ],
      // },
    },
    {
      type: "category",
      label: "2. ElasticGraph ORM",
      items: [
        {
          type: "doc",
          label: "2.1 Elasticgraph",
          id: "elasticgraph-orm/elasticgraph",
        },
        {
          type: "doc",
          label: "2.2 Feature Set Of Elasticgraph",
          id: "elasticgraph-orm/feature-set-of-elasticgraph",
        },
      ],
    },
    {
      type: "category",
      label: "3. Web-UI Starter Kit",
      items: [
        {
          type: "doc",
          label: "3.1. React App",
          id: "ai-modules/react-app",
        },
      ],
    },
  ],
};

module.exports = sidebars;

// As discussed in the previous blog of the series, we have discussed about four main issues of FOSS community
// 1.unethical uses
// 2. lack of contribution by community.
// 3. lack of sustainability of open core model
//   - difficult to sustain
//   - inherant conflict
// 4. open core model - limited version - only used for marketing - no practical use

// In this blog  ,let us review what could be an alternative approach for the community which is fair for everybody
