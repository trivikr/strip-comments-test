# strip-comments-test

Test case for strip-comments stripping source code

## Pre-requisites

- Node.js >= 16.10
- Run `corepack enable` so that it picks up yarn package manager.

## Steps to reproduce

- Run `yarn` to install dependencies.
- Run `yarn strip-comments` to strip comments from `Wisdom.d.ts` file.
  - The output file is written at `Wisdom.output.d.ts`.
- Verify that output file ends abruptly.

```console
$ tail -n5 Wisdom.d.ts
     */
    updateKnowledgeBaseTemplateUri(args: UpdateKnowledgeBaseTemplateUriCommandInput, options?: __HttpHandlerOptions): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput>;
    updateKnowledgeBaseTemplateUri(args: UpdateKnowledgeBaseTemplateUriCommandInput, cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void): void;
    updateKnowledgeBaseTemplateUri(args: UpdateKnowledgeBaseTemplateUriCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void): void;
}

$ tail -n5 Wisdom.output.d.ts
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
        updateContent(args: UpdateContentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContentCommandOutput>;
    updateContent(args: UpdateContentCommandInput, cb: (err: any, data?: UpdateContentCommandOutput) => void): void;
    updateContent(args: UpdateContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContentCommandOutput) => void): void;

```
