//Generate a random number for category
// function generateUUID() {
//     return 'tera-xyxy-4xxx'.replace(/[xy]/g, function(c) {
//         const r = Math.random() * 16 | 0;
//         const v = c === 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
// }


$(document).ready(function() {

    // // Add category to the Database
    // $('#categoryForm').on('submit', function(e) {
    //     e.preventDefault(); // Prevent the default form submission
    //     console.log("You clicked add category button");

    //     var categoryName = $('input[name="categoryname"]').val();

    //     $.ajax({
    //         type: 'POST',
    //         url: '../api/add_category.php', // The URL to the PHP script that handles the form submission
    //         data: {
    //             categoryname: categoryName 

    //         },
    //         success: function(response) {
    //             $('#error-message').html(response);

    //             // Append new category to the table
    //             $('#categoryTableBody').append(
    //                 '<tr><td>' + categoryName + '</td><td>0</td><td>0</td></tr>'
    //             );


                // setTimeout(function() {
                //     $('#error-message').html('<input type="text" name="categoryname" id="category" placeholder="Enter the name of the category" required>');
                // }, 3000); // 5000 milliseconds = 5 seconds
    //         },
    //         error: function(xhr, status, error) {
    //             $('#error-message').html('An error occurred: ' + xhr.responseText);
    //             setTimeout(function() {
    //                 $('#error-message').html('');
    //             }, 3000); // 5000 milliseconds = 5 seconds
    //         }
    //     });
    // });


    // Add category to the Database
    $('#categoryForm').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        console.log("You clicked add category button");

        var categoryName = $('input[name="categoryname"]').val();

        $.ajax({
            type: 'POST',
            url: '../api/add_category.php', // The URL to the PHP script that handles the form submission
            data: {
                categoryname: categoryName
            },
            dataType: 'json', // Expect JSON response
            success: function(response) {
                $('#error-message').html(response.message);

                if (response.status === 'success') {
                    // Append new category to the table only if the category was created successfully
                    $('#categoryTableBody').append(
                        '<tr><td>' + categoryName + '</td><td>0</td><td>0</td></tr>'
                    );

                    setTimeout(function() {
                        $('#error-message').html('<input type="text" name="categoryname" id="category" placeholder="Enter the name of the category" required>');
                    }, 3000); // 3000 milliseconds = 3 seconds
                } else {
                    // setTimeout(function() {
                    //     $('#error-message').html('');
                    // }, 3000); // 3000 milliseconds = 3 seconds
                    setTimeout(function() {
                        $('#error-message').html('<input type="text" name="categoryname" id="category" placeholder="Enter the name of the category" required>');
                    }, 3000); // 3000 milliseconds = 3 seconds
                }
            },
            error: function(xhr, status, error) {
                $('#error-message').html('An error occurred: ' + xhr.responseText);
                setTimeout(function() {
                    $('#error-message').html('');
                }, 3000); // 3000 milliseconds = 3 seconds
            }
        });
    });


    // Add course to the Database

    $('#createCourse').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        // console.log("You clicked add course button");

        var unique_id = $('input[name="unique_id"]').val();
        var coursetitle = $('input[name="coursetitle"]').val();
        var courselevel = $('select[name="courselevel"]').val();
        var coursecategory = $('select[name="coursecategory"]').val();
        var coursedescription = $('textarea[name="coursedescription"]').val();
        var courseknowledge = $('textarea[name="courseknowledge"]').val();
        var courserequirement = $('textarea[name="courserequirement"]').val();
        // console.log("I got to the variablens");
        
        $.ajax({
            type: 'POST',
            url: '../api/add_course.php', // The URL to the PHP script that handles the form submission
            data: {
                unique_id: unique_id,
                coursetitle: coursetitle,
                courselevel: courselevel,
                coursecategory: coursecategory,
                coursedescription: coursedescription,
                courseknowledge: courseknowledge,
                courserequirement: courserequirement
            },
            success: function(response) {
                // $('#error-message').html(response);
                window.location.href = '../account/curriculum.php?c='+response; // Change to the desired URL


                // setTimeout(function() {
                //     $('#error-message').html('<input type="text" name="categoryname" id="category" placeholder="Enter the name of the category" required>');
                // }, 3000); // 5000 milliseconds = 5 seconds
            },
            error: function(xhr, status, error) {
                $('#error-message').html('An error occurred: ' + xhr.responseText);
                setTimeout(function() {
                    $('#error-message').html('');
                }, 3000); // 5000 milliseconds = 5 seconds
            }
        });
    });


    // Add section of the couse to the Database
    $('#courseSection').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        var unique_id = $('input[name="unique_id"]').val();
        var course_id = $('input[name="course_id"]').val();
        var sectionName = $('input[name="sectionName"]').val();
        
        $.ajax({
            type: 'POST',
            url: '../api/add_section.php', // The URL to the PHP script that handles the form submission
            data: {
                unique_id: unique_id,
                course_id: course_id,
                sectionName: sectionName,
           
            },
            success: function(response) {


                // $('#newsectionformrow').html('');

                // Append new category to the table
                $('#lessonSection').append(
                    `<div class="accordion__item -dark-bg-dark-1 mt-10">
                        <div class="accordion__button py-20 px-30 bg-light-4">
                        <div class="d-flex items-center">
                            <div class="icon icon-drag mr-10"></div>
                            <span class="text-16 lh-14 fw-500 text-dark-1">`+ sectionName +`</span>
                        </div>

                        <div class="d-flex x-gap-10 items-center">
                            <a href="#" class="icon icon-edit mr-5"></a>
                            <a href="#" class="icon icon-bin"></a>
                            <div class="accordion__icon mr-0">
                            <div class="d-flex items-center justify-center icon icon-chevron-down"></div>
                            <div class="d-flex items-center justify-center icon icon-chevron-up"></div>
                            </div>
                        </div>
                        </div>

                        <div class="accordion__content">
                        <div class="accordion__content__inner px-30 py-30">
                            <div class="d-flex x-gap-10 y-gap-10 flex-wrap">
                            <div>
                                <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                            </div>
                            <div>
                                <a href="#" class="button -sm py-15 -purple-3 text-purple-1 fw-500">Add Article +</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>`

                );
            },
            error: function(xhr, status, error) {
                $('#error-message').html('An error occurred: ' + xhr.responseText);
                setTimeout(function() {
                    $('#error-message').html('');
                }, 30000); // 5000 milliseconds = 5 seconds
            }
        });
    });



    // Delete a section for the curriculim
    $('.icon-bin').on('click', function(e) {
        e.preventDefault();
        var sectionId = $(this).data('id');
        var currentUrl = $(this).data('url');

        $.ajax({
            url: '../api/delete_sec.php',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ id: sectionId, u: currentUrl }),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                if (response.status === 'success') {
                    $('#section-' + sectionId).remove();
                } else {
                    console.error('Failed to delete section: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('An error occurred: ' + error);
            }
        });
    });

    // Edit a section for the curriculim

    $('.icon-edit').on('click', function(e) {
        e.preventDefault();
        var sectionId = $(this).data('id');
        var sectionDiv = $('#' + sectionId);
        sectionDiv.find('.section-name').hide();
        sectionDiv.find('.edit-form').show();
    });

    $('.edit-form .cancel').on('click', function() {
        var form = $(this).closest('.edit-form');
        form.hide();
        form.siblings('.section-name').show();
    });

    $('.edit-form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var sectionId = form.closest('.accordion__item').attr('id');
        var sectionName = form.find('input[name="section_name"]').val();

        $.ajax({
            url: '../api/edit_sec.php',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ id: sectionId, section_name: sectionName }),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                if (response.status === 'success') {
                    form.siblings('.section-name').text(sectionName).show();
                    form.hide();
                } else {
                    console.error('Failed to edit section: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('An error occurred: ' + error);
            }
        });
    });


    // Add a lesson or video to a section for the curriculim

    $('.add-video').on('click', function(e) {
        e.preventDefault();
        var sectionId = $(this).data('id');
        var sectionDiv = $('#' + sectionId);
        sectionDiv.find('.upload-video-form').show();
    });
    
    $('.upload-video-form .cancel-upload').on('click', function() {
        var form = $(this).closest('.upload-video-form');
        form.hide();
        form[0].reset();
    });
    
    $('.upload-video-form').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var sectionId = form.closest('.accordion__item').attr('id');
        var formData = new FormData(this);
    
        formData.append('section_id', sectionId);
    
        $.ajax({
            url: '../api/add_video.php',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(response) {
                console.log('Success:', response);
                if (response.status === 'success') {
                    form.hide();
                    form[0].reset();
                    console.log('Video uploaded successfully');
                } else {
                    console.error('Failed to upload video: ' + response.message);
                }
            },
            error: function(xhr, status, error) {
                console.error('An error occurred: ' + error);
            }
        });
    });
});




