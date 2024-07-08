<div class="dashboard__sidebar scroll-bar-1">


            <div class="sidebar -dashboard">

              <div class="sidebar__item ">
                <a href="<?php echo DASHBOARD ?>" class="d-flex items-center text-17 lh-1 fw-500 ">
                  <i class="text-20 icon-discovery mr-15"></i>
                  Dashboard
                </a>
              </div>

              <?php if ($instructor == 1 || $admin == 1): ?>
                  <div class="sidebar__item">
                      <a href="<?php echo CREATE_COURSE?>" class="d-flex items-center text-17 lh-1 fw-500 -dark-text-white">
                          <i class="text-20 icon-list mr-15"></i>
                          Create Course
                      </a>
                  </div>
              <?php endif; ?>

              <?php if ($admin == 1): ?>
                  <div class="sidebar__item">
                      <a href="<?php echo CATEGORIES?>" class="d-flex items-center text-17 lh-1 fw-500 -dark-text-white">
                          <i class="text-20 icon-list mr-15"></i>
                          Category
                      </a>
                  </div>
              <?php endif; ?>

              <div class="sidebar__item">
                <a href="<?php echo PROFILE ?>" class="d-flex items-center text-17 lh-1 fw-500 ">
                  <i class="text-20 icon-bookmark mr-15"></i>
                  Profile
                </a>
              </div>

              <div class="sidebar__item">
                <a href="<?php echo MY_COURSES ?>" class="d-flex items-center text-17 lh-1 fw-500 ">
                  <i class="text-20 icon-play-button mr-15"></i>
                  My Courses
                </a>
              </div>

              <div class="sidebar__item ">
                <a href="<?php echo BOOKMARK ?>" class="d-flex items-center text-17 lh-1 fw-500 ">
                  <i class="text-20 icon-bookmark mr-15"></i>
                  Bookmarks
                </a>
              </div>

              <div class="sidebar__item ">
                <a href="dshb-messages.html" class="d-flex items-center text-17 lh-1 fw-500 ">
                  <i class="text-20 icon-message mr-15"></i>
                  Messages
                </a>
              </div>

              <div class="sidebar__item">
                  <a href="dshb-listing.html" class="d-flex items-center text-17 lh-1 fw-500 -dark-text-white">
                      <i class="text-20 icon-list mr-15"></i>
                      Quiz Attempts
                  </a>
              </div>

              <div class="sidebar__item ">
                <a href="dshb-reviews.html" class="d-flex items-center text-17 lh-1 fw-500 ">
                  <i class="text-20 icon-comment mr-15"></i>
                  Reviews
                </a>
              </div>


              <div class="sidebar__item ">
                <a href="<?php echo LOGOUT ?>" class="d-flex items-center text-17 lh-1 fw-500 ">
                  <i class="text-20 icon-power mr-15"></i>
                  Logout
                </a>
              </div>

            </div>


          </div>