import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { CreateAssistantAssociationCommandInput, CreateAssistantAssociationCommandOutput } from "./commands/CreateAssistantAssociationCommand";
import { CreateAssistantCommandInput, CreateAssistantCommandOutput } from "./commands/CreateAssistantCommand";
import { CreateContentCommandInput, CreateContentCommandOutput } from "./commands/CreateContentCommand";
import { CreateKnowledgeBaseCommandInput, CreateKnowledgeBaseCommandOutput } from "./commands/CreateKnowledgeBaseCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "./commands/CreateSessionCommand";
import { DeleteAssistantAssociationCommandInput, DeleteAssistantAssociationCommandOutput } from "./commands/DeleteAssistantAssociationCommand";
import { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "./commands/DeleteAssistantCommand";
import { DeleteContentCommandInput, DeleteContentCommandOutput } from "./commands/DeleteContentCommand";
import { DeleteKnowledgeBaseCommandInput, DeleteKnowledgeBaseCommandOutput } from "./commands/DeleteKnowledgeBaseCommand";
import { GetAssistantAssociationCommandInput, GetAssistantAssociationCommandOutput } from "./commands/GetAssistantAssociationCommand";
import { GetAssistantCommandInput, GetAssistantCommandOutput } from "./commands/GetAssistantCommand";
import { GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import { GetContentSummaryCommandInput, GetContentSummaryCommandOutput } from "./commands/GetContentSummaryCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "./commands/GetKnowledgeBaseCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "./commands/GetRecommendationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { ListAssistantAssociationsCommandInput, ListAssistantAssociationsCommandOutput } from "./commands/ListAssistantAssociationsCommand";
import { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "./commands/ListAssistantsCommand";
import { ListContentsCommandInput, ListContentsCommandOutput } from "./commands/ListContentsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "./commands/ListKnowledgeBasesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { NotifyRecommendationsReceivedCommandInput, NotifyRecommendationsReceivedCommandOutput } from "./commands/NotifyRecommendationsReceivedCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { QueryAssistantCommandInput, QueryAssistantCommandOutput } from "./commands/QueryAssistantCommand";
import { RemoveKnowledgeBaseTemplateUriCommandInput, RemoveKnowledgeBaseTemplateUriCommandOutput } from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import { SearchContentCommandInput, SearchContentCommandOutput } from "./commands/SearchContentCommand";
import { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "./commands/SearchSessionsCommand";
import { StartContentUploadCommandInput, StartContentUploadCommandOutput } from "./commands/StartContentUploadCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateContentCommandInput, UpdateContentCommandOutput } from "./commands/UpdateContentCommand";
import { UpdateKnowledgeBaseTemplateUriCommandInput, UpdateKnowledgeBaseTemplateUriCommandOutput } from "./commands/UpdateKnowledgeBaseTemplateUriCommand";
import { WisdomClient } from "./WisdomClient";
/**
 * <p>Amazon Connect Wisdom delivers agents the information they need to solve customer issues as they're actively
 *         speaking with customers. Agents can search across connected repositories from within their agent desktop
 *         to find answers quickly. Use the Amazon Connect Wisdom APIs to create an assistant and a knowledge base, for example, or manage content by uploading custom files.</p>
 */
export declare class Wisdom extends WisdomClient {
    /**
     * <p>Creates an Amazon Connect Wisdom assistant.</p>
     */
    createAssistant(args: CreateAssistantCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssistantCommandOutput>;
    createAssistant(args: CreateAssistantCommandInput, cb: (err: any, data?: CreateAssistantCommandOutput) => void): void;
    createAssistant(args: CreateAssistantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssistantCommandOutput) => void): void;
    /**
     * <p>Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the
     *       only supported association is with a knowledge base. An assistant can have only a single
     *       association.</p>
     */
    createAssistantAssociation(args: CreateAssistantAssociationCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssistantAssociationCommandOutput>;
    createAssistantAssociation(args: CreateAssistantAssociationCommandInput, cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void): void;
    createAssistantAssociation(args: CreateAssistantAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssistantAssociationCommandOutput) => void): void;
    /**
     * <p>Creates Wisdom content. Before to calling this API, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a> to
     *       upload an asset.</p>
     */
    createContent(args: CreateContentCommandInput, options?: __HttpHandlerOptions): Promise<CreateContentCommandOutput>;
    createContent(args: CreateContentCommandInput, cb: (err: any, data?: CreateContentCommandOutput) => void): void;
    createContent(args: CreateContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContentCommandOutput) => void): void;
    /**
     * <p>Creates a knowledge base.</p>
     *          <note>
     *             <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a>
     *         DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do,
     *         you'll get an <code>InvalidRequestException</code> error. </p>
     *
     *             <p>For example, you're programmatically managing your external knowledge base, and you want
     *         to add or remove one of the fields that is being ingested from Salesforce. Do the
     *         following:</p>
     *             <ol>
     *                <li>
     *                   <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p>
     *                </li>
     *                <li>
     *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p>
     *                </li>
     *                <li>
     *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different
     *             one.</p>
     *                </li>
     *                <li>
     *                   <p>Call CreateKnowledgeBase.</p>
     *                </li>
     *             </ol>
     *          </note>
     */
    createKnowledgeBase(args: CreateKnowledgeBaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateKnowledgeBaseCommandOutput>;
    createKnowledgeBase(args: CreateKnowledgeBaseCommandInput, cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void): void;
    createKnowledgeBase(args: CreateKnowledgeBaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateKnowledgeBaseCommandOutput) => void): void;
    /**
     * <p>Creates a session. A session is a contextual container used for generating
     *       recommendations. Amazon Connect creates a new Wisdom session for each contact on which Wisdom is
     *       enabled.</p>
     */
    createSession(args: CreateSessionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSessionCommandOutput>;
    createSession(args: CreateSessionCommandInput, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
    createSession(args: CreateSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSessionCommandOutput) => void): void;
    /**
     * <p>Deletes an assistant.</p>
     */
    deleteAssistant(args: DeleteAssistantCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssistantCommandOutput>;
    deleteAssistant(args: DeleteAssistantCommandInput, cb: (err: any, data?: DeleteAssistantCommandOutput) => void): void;
    deleteAssistant(args: DeleteAssistantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssistantCommandOutput) => void): void;
    /**
     * <p>Deletes an assistant association.</p>
     */
    deleteAssistantAssociation(args: DeleteAssistantAssociationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssistantAssociationCommandOutput>;
    deleteAssistantAssociation(args: DeleteAssistantAssociationCommandInput, cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void): void;
    deleteAssistantAssociation(args: DeleteAssistantAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssistantAssociationCommandOutput) => void): void;
    /**
     * <p>Deletes the content.</p>
     */
    deleteContent(args: DeleteContentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContentCommandOutput>;
    deleteContent(args: DeleteContentCommandInput, cb: (err: any, data?: DeleteContentCommandOutput) => void): void;
    deleteContent(args: DeleteContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContentCommandOutput) => void): void;
    /**
     * <p>Deletes the knowledge base.</p>
     *          <note>
     *             <p>When you use this API to delete an external knowledge base such as Salesforce or
     *         ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration.
     *         This is because you can't reuse the DataIntegration after it's been associated with an
     *         external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API
     *         Reference</i>.</p>
     *          </note>
     */
    deleteKnowledgeBase(args: DeleteKnowledgeBaseCommandInput, options?: __HttpHandlerOptions): Promise<DeleteKnowledgeBaseCommandOutput>;
    deleteKnowledgeBase(args: DeleteKnowledgeBaseCommandInput, cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void): void;
    deleteKnowledgeBase(args: DeleteKnowledgeBaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteKnowledgeBaseCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an assistant.</p>
     */
    getAssistant(args: GetAssistantCommandInput, options?: __HttpHandlerOptions): Promise<GetAssistantCommandOutput>;
    getAssistant(args: GetAssistantCommandInput, cb: (err: any, data?: GetAssistantCommandOutput) => void): void;
    getAssistant(args: GetAssistantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssistantCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an assistant association.</p>
     */
    getAssistantAssociation(args: GetAssistantAssociationCommandInput, options?: __HttpHandlerOptions): Promise<GetAssistantAssociationCommandOutput>;
    getAssistantAssociation(args: GetAssistantAssociationCommandInput, cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void): void;
    getAssistantAssociation(args: GetAssistantAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssistantAssociationCommandOutput) => void): void;
    /**
     * <p>Retrieves content, including a pre-signed URL to download the content.</p>
     */
    getContent(args: GetContentCommandInput, options?: __HttpHandlerOptions): Promise<GetContentCommandOutput>;
    getContent(args: GetContentCommandInput, cb: (err: any, data?: GetContentCommandOutput) => void): void;
    getContent(args: GetContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContentCommandOutput) => void): void;
    /**
     * <p>Retrieves summary information about the content.</p>
     */
    getContentSummary(args: GetContentSummaryCommandInput, options?: __HttpHandlerOptions): Promise<GetContentSummaryCommandOutput>;
    getContentSummary(args: GetContentSummaryCommandInput, cb: (err: any, data?: GetContentSummaryCommandOutput) => void): void;
    getContentSummary(args: GetContentSummaryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetContentSummaryCommandOutput) => void): void;
    /**
     * <p>Retrieves information about the knowledge base.</p>
     */
    getKnowledgeBase(args: GetKnowledgeBaseCommandInput, options?: __HttpHandlerOptions): Promise<GetKnowledgeBaseCommandOutput>;
    getKnowledgeBase(args: GetKnowledgeBaseCommandInput, cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void): void;
    getKnowledgeBase(args: GetKnowledgeBaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetKnowledgeBaseCommandOutput) => void): void;
    /**
     * <p>Retrieves recommendations for the specified session. To avoid retrieving the same
     *       recommendations in subsequent calls, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_NotifyRecommendationsReceived.html">NotifyRecommendationsReceived</a>. This API supports long-polling behavior with the
     *         <code>waitTimeSeconds</code> parameter. Short poll is the default behavior and only returns
     *       recommendations already available. To perform a manual query against an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.</p>
     */
    getRecommendations(args: GetRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetRecommendationsCommandOutput>;
    getRecommendations(args: GetRecommendationsCommandInput, cb: (err: any, data?: GetRecommendationsCommandOutput) => void): void;
    getRecommendations(args: GetRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRecommendationsCommandOutput) => void): void;
    /**
     * <p>Retrieves information for a specified session.</p>
     */
    getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
    getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
    getSession(args: GetSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
    /**
     * <p>Lists information about assistant associations.</p>
     */
    listAssistantAssociations(args: ListAssistantAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssistantAssociationsCommandOutput>;
    listAssistantAssociations(args: ListAssistantAssociationsCommandInput, cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void): void;
    listAssistantAssociations(args: ListAssistantAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssistantAssociationsCommandOutput) => void): void;
    /**
     * <p>Lists information about assistants.</p>
     */
    listAssistants(args: ListAssistantsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssistantsCommandOutput>;
    listAssistants(args: ListAssistantsCommandInput, cb: (err: any, data?: ListAssistantsCommandOutput) => void): void;
    listAssistants(args: ListAssistantsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssistantsCommandOutput) => void): void;
    /**
     * <p>Lists the content.</p>
     */
    listContents(args: ListContentsCommandInput, options?: __HttpHandlerOptions): Promise<ListContentsCommandOutput>;
    listContents(args: ListContentsCommandInput, cb: (err: any, data?: ListContentsCommandOutput) => void): void;
    listContents(args: ListContentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContentsCommandOutput) => void): void;
    /**
     * <p>Lists the knowledge bases.</p>
     */
    listKnowledgeBases(args: ListKnowledgeBasesCommandInput, options?: __HttpHandlerOptions): Promise<ListKnowledgeBasesCommandOutput>;
    listKnowledgeBases(args: ListKnowledgeBasesCommandInput, cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void): void;
    listKnowledgeBases(args: ListKnowledgeBasesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListKnowledgeBasesCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified recommendations from the specified assistant's queue of newly
     *       available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling
     *       behavior and avoiding duplicate recommendations.</p>
     */
    notifyRecommendationsReceived(args: NotifyRecommendationsReceivedCommandInput, options?: __HttpHandlerOptions): Promise<NotifyRecommendationsReceivedCommandOutput>;
    notifyRecommendationsReceived(args: NotifyRecommendationsReceivedCommandInput, cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void): void;
    notifyRecommendationsReceived(args: NotifyRecommendationsReceivedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: NotifyRecommendationsReceivedCommandOutput) => void): void;
    /**
     * <p>Submits feedback to Wisdom. The feedback is used to improve future recommendations from
     *       <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> or
     *       results from <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_QueryAssistant.html">QueryAssistant</a>.
     *       Feedback can be resubmitted up to 6 hours after submission.
     *     </p>
     */
    putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
    putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
    putFeedback(args: PutFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
    /**
     * <p>Performs a manual search against the specified assistant. To retrieve recommendations for
     *       an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>.
     *     </p>
     */
    queryAssistant(args: QueryAssistantCommandInput, options?: __HttpHandlerOptions): Promise<QueryAssistantCommandOutput>;
    queryAssistant(args: QueryAssistantCommandInput, cb: (err: any, data?: QueryAssistantCommandOutput) => void): void;
    queryAssistant(args: QueryAssistantCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: QueryAssistantCommandOutput) => void): void;
    /**
     * <p>Removes a URI template from a knowledge base.</p>
     */
    removeKnowledgeBaseTemplateUri(args: RemoveKnowledgeBaseTemplateUriCommandInput, options?: __HttpHandlerOptions): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput>;
    removeKnowledgeBaseTemplateUri(args: RemoveKnowledgeBaseTemplateUriCommandInput, cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void): void;
    removeKnowledgeBaseTemplateUri(args: RemoveKnowledgeBaseTemplateUriCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveKnowledgeBaseTemplateUriCommandOutput) => void): void;
    /**
     * <p>Searches for content in a specified knowledge base. Can be used to get a specific content
     *       resource by its name.</p>
     */
    searchContent(args: SearchContentCommandInput, options?: __HttpHandlerOptions): Promise<SearchContentCommandOutput>;
    searchContent(args: SearchContentCommandInput, cb: (err: any, data?: SearchContentCommandOutput) => void): void;
    searchContent(args: SearchContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchContentCommandOutput) => void): void;
    /**
     * <p>Searches for sessions.</p>
     */
    searchSessions(args: SearchSessionsCommandInput, options?: __HttpHandlerOptions): Promise<SearchSessionsCommandOutput>;
    searchSessions(args: SearchSessionsCommandInput, cb: (err: any, data?: SearchSessionsCommandOutput) => void): void;
    searchSessions(args: SearchSessionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchSessionsCommandOutput) => void): void;
    /**
     * <p>Get a URL to upload content to a knowledge base. To upload content, first make a PUT
     *       request to the returned URL with your file, making sure to include the required headers. Then
     *       use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a
     *       knowledge base of type CUSTOM.</p>
     */
    startContentUpload(args: StartContentUploadCommandInput, options?: __HttpHandlerOptions): Promise<StartContentUploadCommandOutput>;
    startContentUpload(args: StartContentUploadCommandInput, cb: (err: any, data?: StartContentUploadCommandOutput) => void): void;
    startContentUpload(args: StartContentUploadCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartContentUploadCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates information about the content.</p>
     */
    updateContent(args: UpdateContentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContentCommandOutput>;
    updateContent(args: UpdateContentCommandInput, cb: (err: any, data?: UpdateContentCommandOutput) => void): void;
    updateContent(args: UpdateContentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContentCommandOutput) => void): void;
    /**
     * <p>Updates the template URI of a knowledge base. This is only supported for knowledge bases
     *       of type EXTERNAL. Include a single variable in <code>${variable}</code> format; this
     *       interpolated by Wisdom using ingested content. For example, if you ingest a Salesforce
     *       article, it has an <code>Id</code> value, and you can set the template URI to
     *         <code>https://myInstanceName.lightning.force.com/lightning/r/Knowledge__kav/*${Id}*\/view</code>.
     *     </p>
     */
    updateKnowledgeBaseTemplateUri(args: UpdateKnowledgeBaseTemplateUriCommandInput, options?: __HttpHandlerOptions): Promise<UpdateKnowledgeBaseTemplateUriCommandOutput>;
    updateKnowledgeBaseTemplateUri(args: UpdateKnowledgeBaseTemplateUriCommandInput, cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void): void;
    updateKnowledgeBaseTemplateUri(args: UpdateKnowledgeBaseTemplateUriCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateKnowledgeBaseTemplateUriCommandOutput) => void): void;
}
