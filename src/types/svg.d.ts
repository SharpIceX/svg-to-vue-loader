import type { DefineComponent } from 'vue';

export type ComponentType = DefineComponent<
	{
		/**
		 * The size of the svg, must be a number.
		 */
		size?: string;
	},
	object,
	object
>;

export type NoSizeComponentType = DefineComponent<object, object, object>;
