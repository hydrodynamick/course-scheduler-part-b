describe('CourseView', function() {
	var view;

	beforeEach(function() {
		view = new app.views.CourseView();
		view.render(); // need some DOM elements to test
	});

	describe('renders a view', function() {
		describe('without a course', function() {
			it('contains inupt#course-code', function() {
				expect(view.$el.find('input#course-code')).toExist();
			});

			// TODO: tests for presence of required elements
		});

		describe('with a course', function() {
			beforeEach(function() {
				view = new app.views.CourseView({
					model: {
						attributes: {
							code: 'COMP1000',
							name: 'Computing 1',
							instructor: 'Jane Doe'
							// TODO: include classes
						}
					}
				});
				view.render();
			});

			it('renders the expected course code', function() {
				expect(view.$el.find('input#course-code')).toHaveValue('COMP1000');
			});

			// TODO: tests for display of desired course attributes
		});

		describe('renders when course is modified', function() {
			xit('displays updated values', function() {
				// TODO: complete the test
			});
		});
	});

	describe('supports interactive events', function() {
		// e.g. when submit is clicked, does it do x?
	});
});