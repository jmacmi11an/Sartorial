import zero from './wardrobes/zero';

export const filteredWardrobe = (clothes) => {
	const filtered = [];
	for (const c in clothes) {
		if (clothes[c]) filtered.push({ name: c, data: zero[c.toLowerCase()] });
	}
	return filtered;
};
