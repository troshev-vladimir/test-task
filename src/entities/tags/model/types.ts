export type Good = {
	id: number;
	name: string;
	categories: Category[];
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

export type Tag = {
	id: number;
	name: string;
	aliases: Array<string>;
};
