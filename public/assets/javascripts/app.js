'use strict';

$(document).ready(() => {
	$('.btnDevour').on('click', (e) => {
		e.preventDefault();

		const id = $(e.target).data('id');
		$.ajax(`/devour/${id}`, {
			type: 'PUT',
			data: { isDevoured: true },
		})
			.then((burger) => {
				location.reload();
			})
			.catch((err) => {
				console.error(err);
			});
	});
});
