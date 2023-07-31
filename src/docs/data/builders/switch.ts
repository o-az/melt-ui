import { ATTRS, DESCRIPTIONS, KBD, PROPS, SEE } from '$docs/constants';
import type { APISchema, KeyboardSchema } from '$docs/types';
import { genElements, genProps, propsToOptions } from '$docs/utils/content';
import type { BuilderData } from '.';

const OPTION_PROPS = [
	PROPS.DISABLED,
	PROPS.REQUIRED,
	{
		name: 'name',
		type: 'string',
		description: 'The name of the hidden input element used for form submission..',
	},
	{
		name: 'value',
		type: 'string',
		description: 'The value of the hidden input element used for form submission.',
	},
];

const builder: APISchema = {
	title: 'createSwitch',
	description: DESCRIPTIONS.BUILDER('switch'),
	props: genProps('switch', [
		...OPTION_PROPS,
		{
			name: 'defaultChecked',
			type: 'boolean',
			default: 'false',
			description: 'The initial checked state of the switch.',
		},
		{
			name: 'checked',
			type: 'Writable<boolean>',
			description:
				'The controlled checked state store of the switch. If provided, this will override the value passed to `defaultChecked`.',
			see: SEE.BRING_YOUR_OWN_STORE,
		},
		{
			name: 'onCheckedChange',
			type: 'ChangeFn<boolean>',
			description:
				'A callback called when the value of the `checked` store should be changed. This is useful for controlling the checked state of the switch from outside the switch.',
			see: SEE.CHANGE_FUNCTIONS,
		},
	]),
	elements: genElements('switch', [
		{
			name: 'root',
			description: 'The builder store used to create the switch root.',
			link: '#root',
		},
		{
			name: 'input',
			description: 'The builder store used to create the switch input.',
			link: '#input',
		},
	]),
	states: [
		{
			name: 'checked',
			type: 'Readable<boolean>',
			description: 'A derived store that returns whether or not the switch is checked.',
		},
	],
	options: propsToOptions('switch', OPTION_PROPS),
};

const root: APISchema = {
	title: 'root',
	description: 'The switch element.',
	dataAttributes: [
		{
			name: 'data-disabled',
			value: ATTRS.DISABLED('switch'),
		},
		{
			name: 'data-state',
			value: ATTRS.CHECKED_UNCHECKED,
		},
		{
			name: 'data-melt-switch',
			value: ATTRS.MELT('switch'),
		},
	],
};

const input: APISchema = {
	title: 'input',
	description: 'The hidden input element used for form submission.',
	dataAttributes: [
		{
			name: 'data-melt-switch-input',
			value: ATTRS.MELT('input'),
		},
	],
};

const keyboard: KeyboardSchema = [
	{
		key: KBD.SPACE,
		behavior: 'When the switch has focus, toggles the switch.',
	},
	{
		key: KBD.ENTER,
		behavior: 'When the switch has focus, toggles the switch.',
	},
];

const schemas = [builder, root, input];
const features = ['Full keyboard navigation', 'Can be controlled or uncontrolled'];

export const switchData: BuilderData = {
	schemas,
	features,
	keyboard,
};
