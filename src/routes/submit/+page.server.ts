import type { Actions } from "./$types";
import { env } from "$lib/env";

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const flag = formData.get("flag");

		if (flag === env.FLAG) {
			return { status: true, message: "Correct!" };
		}

		return { status: false, message: "Incorrect!" };
	}
} satisfies Actions;
