import { type FreOwnerDescriptor } from './FreOwnerDescriptor.js';

/**
 * You can either directly implement these interfaces, or use `Module Augmentation`,
 * as described in `https://www.typescriptlang.org/docs/handbook/declaration-merging.html`.
 */
export interface FreNode {
	freId(): string;

	freLanguageConcept(): string;

	freOwner(): FreNode | undefined;

	freOwnerDescriptor(): FreOwnerDescriptor;

	freIsModel(): boolean;

	freIsUnit(): boolean;

	freIsExpression(): boolean;

	freIsBinaryExpression(): boolean;

	copy(): FreNode;

	match(toBeMatched: Partial<FreNode>): boolean;
}
