/* tslint:disable */

/* Long type */
export type Long = any;
/* Enum for IssueState */
export type IssueState = "open" | "closed";

/* Ordering Enum for Issue */
export type _IssueOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "number_asc" | "number_desc" | "name_asc" | "name_desc" | "title_asc" | "title_desc" | "body_asc" | "body_desc" | "state_asc" | "state_desc" | "timestamp_asc" | "timestamp_desc" | "action_asc" | "action_desc" | "createdAt_asc" | "createdAt_desc" | "updatedAt_asc" | "updatedAt_desc" | "closedAt_asc" | "closedAt_desc";

/* Ordering Enum for Repo */
export type _RepoOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "owner_asc" | "owner_desc" | "name_asc" | "name_desc" | "allowRebaseMerge_asc" | "allowRebaseMerge_desc" | "allowSquashMerge_asc" | "allowSquashMerge_desc" | "allowMergeCommit_asc" | "allowMergeCommit_desc" | "gitHubId_asc" | "gitHubId_desc" | "defaultBranch_asc" | "defaultBranch_desc";

/* Ordering Enum for Label */
export type _LabelOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "default_asc" | "default_desc" | "color_asc" | "color_desc";

/* Ordering Enum for ChatChannel */
export type _ChatChannelOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "provider_asc" | "provider_desc" | "normalizedName_asc" | "normalizedName_desc" | "channelId_asc" | "channelId_desc" | "isDefault_asc" | "isDefault_desc" | "botInvitedSelf_asc" | "botInvitedSelf_desc";

/* Ordering Enum for ChatId */
export type _ChatIdOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "screenName_asc" | "screenName_desc" | "userId_asc" | "userId_desc" | "provider_asc" | "provider_desc" | "isAtomistBot_asc" | "isAtomistBot_desc" | "isOwner_asc" | "isOwner_desc" | "isPrimaryOwner_asc" | "isPrimaryOwner_desc" | "isAdmin_asc" | "isAdmin_desc" | "isBot_asc" | "isBot_desc" | "timezoneLabel_asc" | "timezoneLabel_desc";

/* Ordering Enum for Email */
export type _EmailOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "address_asc" | "address_desc";

/* Ordering Enum for GitHubId */
export type _GitHubIdOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "login_asc" | "login_desc" | "name_asc" | "name_desc";

/* Ordering Enum for GitHubProvider */
export type _GitHubProviderOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "url_asc" | "url_desc" | "providerId_asc" | "providerId_desc" | "apiUrl_asc" | "apiUrl_desc" | "gitUrl_asc" | "gitUrl_desc";

/* Ordering Enum for Team */
export type _TeamOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc";

/* Ordering Enum for Person */
export type _PersonOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "forename_asc" | "forename_desc" | "surname_asc" | "surname_desc";

/* Enum for OwnerType */
export type OwnerType = "user" | "organization";

/* Ordering Enum for Org */
export type _OrgOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "owner_asc" | "owner_desc" | "ownerType_asc" | "ownerType_desc";

/* Enum for WebhookType */
export type WebhookType = "organization" | "repository";

/* Ordering Enum for GitHubOrgWebhook */
export type _GitHubOrgWebhookOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "url_asc" | "url_desc" | "webhookType_asc" | "webhookType_desc";

/* Ordering Enum for ChatTeam */
export type _ChatTeamOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "provider_asc" | "provider_desc" | "domain_asc" | "domain_desc" | "messageCount_asc" | "messageCount_desc" | "emailDomain_asc" | "emailDomain_desc";

/* Ordering Enum for ChannelLink */
export type _ChannelLinkOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc";

/* Ordering Enum for PullRequest */
export type _PullRequestOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "number_asc" | "number_desc" | "prId_asc" | "prId_desc" | "name_asc" | "name_desc" | "body_asc" | "body_desc" | "state_asc" | "state_desc" | "merged_asc" | "merged_desc" | "timestamp_asc" | "timestamp_desc" | "baseBranchName_asc" | "baseBranchName_desc" | "branchName_asc" | "branchName_desc" | "title_asc" | "title_desc" | "createdAt_asc" | "createdAt_desc" | "updatedAt_asc" | "updatedAt_desc" | "closedAt_asc" | "closedAt_desc" | "mergedAt_asc" | "mergedAt_desc";

/* Ordering Enum for Commit */
export type _CommitOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "sha_asc" | "sha_desc" | "message_asc" | "message_desc" | "timestamp_asc" | "timestamp_desc";

/* Enum for BuildStatus */
export type BuildStatus = "passed" | "broken" | "failed" | "started" | "canceled";

/* Enum for BuildTrigger */
export type BuildTrigger = "pull_request" | "push" | "tag" | "cron";

/* Ordering Enum for Build */
export type _BuildOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "buildId_asc" | "buildId_desc" | "name_asc" | "name_desc" | "status_asc" | "status_desc" | "buildUrl_asc" | "buildUrl_desc" | "compareUrl_asc" | "compareUrl_desc" | "trigger_asc" | "trigger_desc" | "provider_asc" | "provider_desc" | "pullRequestNumber_asc" | "pullRequestNumber_desc" | "startedAt_asc" | "startedAt_desc" | "finishedAt_asc" | "finishedAt_desc" | "timestamp_asc" | "timestamp_desc" | "workflowId_asc" | "workflowId_desc" | "jobName_asc" | "jobName_desc" | "jobId_asc" | "jobId_desc";

/* Ordering Enum for Push */
export type _PushOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "timestamp_asc" | "timestamp_desc" | "branch_asc" | "branch_desc";

/* Ordering Enum for Tag */
export type _TagOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "description_asc" | "description_desc" | "ref_asc" | "ref_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for Release */
export type _ReleaseOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for DockerImage */
export type _DockerImageOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "image_asc" | "image_desc";

/* Ordering Enum for K8Spec */
export type _K8SpecOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "name_asc" | "name_desc" | "kind_asc" | "kind_desc" | "curHash_asc" | "curHash_desc" | "fsha_asc" | "fsha_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for K8Pod */
export type _K8PodOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "name_asc" | "name_desc" | "state_asc" | "state_desc" | "host_asc" | "host_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for Environment */
export type _EnvironmentOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "name_asc" | "name_desc" | "vpcName_asc" | "vpcName_desc";

/* Ordering Enum for SpinnakerPipeline */
export type _SpinnakerPipelineOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "executionId_asc" | "executionId_desc" | "application_asc" | "application_desc" | "eventType_asc" | "eventType_desc" | "taskName_asc" | "taskName_desc" | "stageName_asc" | "stageName_desc" | "stageType_asc" | "stageType_desc" | "waitingForJudgement_asc" | "waitingForJudgement_desc";

/* Ordering Enum for SpinnakerStage */
export type _SpinnakerStageOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "type_asc" | "type_desc" | "status_asc" | "status_desc" | "startTime_asc" | "startTime_desc" | "endTime_asc" | "endTime_desc" | "refId_asc" | "refId_desc";

/* Ordering Enum for Workflow */
export type _WorkflowOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "workflowId_asc" | "workflowId_desc" | "provider_asc" | "provider_desc" | "config_asc" | "config_desc";

/* Enum for StatusState */
export type StatusState = "pending" | "success" | "error" | "failure";

/* Ordering Enum for Status */
export type _StatusOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "state_asc" | "state_desc" | "description_asc" | "description_desc" | "targetUrl_asc" | "targetUrl_desc" | "context_asc" | "context_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for HerokuApp */
export type _HerokuAppOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "app_asc" | "app_desc" | "url_asc" | "url_desc" | "timestamp_asc" | "timestamp_desc" | "user_asc" | "user_desc" | "appId_asc" | "appId_desc" | "release_asc" | "release_desc";

/* Ordering Enum for Application */
export type _ApplicationOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "state_asc" | "state_desc" | "host_asc" | "host_desc" | "timestamp_asc" | "timestamp_desc" | "domain_asc" | "domain_desc" | "data_asc" | "data_desc";

/* Ordering Enum for Fingerprint */
export type _FingerprintOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "name_asc" | "name_desc" | "sha_asc" | "sha_desc" | "data_asc" | "data_desc";

/* Ordering Enum for ParentImpact */
export type _ParentImpactOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "url_asc" | "url_desc" | "data_asc" | "data_desc";

/* Ordering Enum for Branch */
export type _BranchOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "timestamp_asc" | "timestamp_desc";

/* Enum for ReviewState */
export type ReviewState = "requested" | "pending" | "approved" | "commented" | "changes_requested";

/* Ordering Enum for Review */
export type _ReviewOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "gitHubId_asc" | "gitHubId_desc" | "body_asc" | "body_desc" | "state_asc" | "state_desc" | "submittedAt_asc" | "submittedAt_desc" | "htmlUrl_asc" | "htmlUrl_desc";

/* Enum for CommentCommentType */
export type CommentCommentType = "review" | "pullRequest" | "issue";

/* Ordering Enum for Comment */
export type _CommentOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "body_asc" | "body_desc" | "timestamp_asc" | "timestamp_desc" | "gitHubId_asc" | "gitHubId_desc" | "path_asc" | "path_desc" | "position_asc" | "position_desc" | "htmlUrl_asc" | "htmlUrl_desc" | "commentType_asc" | "commentType_desc";

/* Ordering Enum for DeletedBranch */
export type _DeletedBranchOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "name_asc" | "name_desc" | "timestamp_asc" | "timestamp_desc";

/* Ordering Enum for K8Cluster */
export type _K8ClusterOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "name_asc" | "name_desc" | "availabilityZone_asc" | "availabilityZone_desc";

/* Ordering Enum for PushImpact */
export type _PushImpactOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "url_asc" | "url_desc" | "data_asc" | "data_desc";

/* Ordering Enum for PullRequestImpact */
export type _PullRequestImpactOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc" | "url_asc" | "url_desc" | "data_asc" | "data_desc";

/* Ordering Enum for UserJoinedChannel */
export type _UserJoinedChannelOrdering = "atmTeamId_asc" | "atmTeamId_desc" | "id_asc" | "id_desc";

export namespace Person {
  export type Variables = {
    teamId: string;
    slackUser: string;
  }

  export type Query = {
    ChatTeam?: ChatTeam[] | null; 
  } 

  export type ChatTeam = {
    members?: Members[] | null; 
  } 

  export type Members = {
    person?: Person | null; 
  } 

  export type Person = {
    forename?: string | null; 
    surname?: string | null; 
  } 
}
export namespace PushWithRepo {
  export type Variables = {
  }

  export type Subscription = {
    Push?: Push[] | null; 
  } 

  export type Push = {
    after?: After | null; 
    repo?: Repo | null; 
  } 

  export type After = {
    sha?: string | null; 
  } 

  export type Repo = {
    channels?: Channels[] | null; 
  } 

  export type Channels = {
    name?: string | null; 
  } 
}
