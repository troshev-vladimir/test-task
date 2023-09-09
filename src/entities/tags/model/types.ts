export type Tag = {
	id: number;
	name: string;
	aliases: Array<string>;
};

export type Category = {
	id: number;
	name: string;
	subcategories: Subcategory[];
};

export type Subcategory = {
	id: number;
	name: string;
	tags: Tag[];
};
