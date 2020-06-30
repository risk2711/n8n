import {
	INodeProperties,
} from 'n8n-workflow';

export const pipelineOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'pipeline',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a pipeline',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all pipelines',
			},
			{
				name: 'Trigger',
				value: 'trigger',
				description: 'Trigger a pipeline',
			},
		],
		default: 'get',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const pipelineFields = [

/* -------------------------------------------------------------------------- */
/*                                 pipeline:get                               */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Project Slug',
		name: 'projectSlug',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'pipeline',
				],
			},
		},
		default: '',
		description: 'Project slug in the form vcs-slug/org-name/repo-name',
	},
	{
		displayName: 'Pipeline Number',
		name: 'pipelineNumber',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'pipeline',
				],
			},
		},
		default: 0,
		description: 'The number of the pipeline',
	},
/* -------------------------------------------------------------------------- */
/*                                 pipeline:getAll                            */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Project Slug',
		name: 'projectSlug',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'pipeline',
				],
			},
		},
		default: '',
		description: 'Project slug in the form vcs-slug/org-name/repo-name',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'pipeline',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'pipeline',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description: 'How many results to return.',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'pipeline',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Branch',
				name: 'branch',
				type: 'string',
				default: '',
				description: 'The name of a vcs branch.',
			},
		],
	},
/* -------------------------------------------------------------------------- */
/*                                 pipeline:trigger                           */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Project Slug',
		name: 'projectSlug',
		type: 'string',
		displayOptions: {
			show: {
				operation: [
					'trigger',
				],
				resource: [
					'pipeline',
				],
			},
		},
		default: '',
		description: 'Project slug in the form vcs-slug/org-name/repo-name',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'pipeline',
				],
				operation: [
					'trigger',
				],
			},
		},
		options: [
			{
				displayName: 'Branch',
				name: 'branch',
				type: 'string',
				default: '',
				description: `The branch where the pipeline ran.<br/>
				The HEAD commit on this branch was used for the pipeline.<br/>
				Note that branch and tag are mutually exclusive.`,
			},
			{
				displayName: 'Tag',
				name: 'tag',
				type: 'string',
				default: '',
				description: `The tag used by the pipeline.<br/>
				The commit that this tag points to was used for the pipeline.<br/>
				Note that branch and tag are mutually exclusive`,
			},
		],
	},
] as INodeProperties[];
