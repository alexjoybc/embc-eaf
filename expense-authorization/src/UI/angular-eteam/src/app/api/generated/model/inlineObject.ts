/**
 * EMBC Expense Authorization
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: apiteam@example.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InlineObject { 
    ApprovedBy?: string | null;
    ApprovedTime?: string;
    CurrentStatus?: string | null;
    EstimatedResourceCost?: number;
    Mission?: string | null;
    Priority?: string | null;
    ReqTrackNoEmac?: string | null;
    ReqTrackNoFema?: string | null;
    ReqTrackNoState?: string | null;
    RequestNumber?: string | null;
    RequestionOrg?: string | null;
    RequestorContactInfo?: string | null;
    ResourceCategory?: string | null;
    ResourceType?: string | null;
    WhenNeeded?: string;
    Event?: string | null;
    ExpenditureNotToExceed?: number;
    EocApprovals_Processing_ApprovedBy?: string | null;
    EocApprovals_Processing_Position?: string | null;
    EocApprovals_Processing_ApprovalDateTime?: string;
    EocApprovals_ExpenditureRequest_ApprovedBy?: string | null;
    EocApprovals_ExpenditureRequest_Position?: string | null;
    EocApprovals_ExpenditureRequest_ApprovalDateTime?: string;
    /**
     * The optional list of files to attach to the request.
     */
    files?: Array<Blob> | null;
}

