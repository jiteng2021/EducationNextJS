import React from "react";

export default function CourseDetailsRelatedCourse() {
  return (
    <>
      {/* <!-- related course --> */}
      <section class="section pt-0">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="section-title">Related Course</h2>
            </div>
          </div>
          <div class="row justify-content-center">
            {/* <!-- course item --> */}
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  class="card-img-top rounded-0"
                  src="images/courses/course-1.jpg"
                  alt="course thumb"
                />
                <div class="card-body">
                  <ul class="list-inline mb-2">
                    <li class="list-inline-item">
                      <i class="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li class="list-inline-item">
                      <a class="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 class="card-title">Photography</h4>
                  </a>
                  <p class="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a href="course-single.html" class="btn btn-primary btn-sm">
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- course item --> */}
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  class="card-img-top rounded-0"
                  src="images/courses/course-2.jpg"
                  alt="course thumb"
                />
                <div class="card-body">
                  <ul class="list-inline mb-2">
                    <li class="list-inline-item">
                      <i class="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li class="list-inline-item">
                      <a class="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 class="card-title">Programming</h4>
                  </a>
                  <p class="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a href="course-single.html" class="btn btn-primary btn-sm">
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- course item --> */}
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  class="card-img-top rounded-0"
                  src="images/courses/course-3.jpg"
                  alt="course thumb"
                />
                <div class="card-body">
                  <ul class="list-inline mb-2">
                    <li class="list-inline-item">
                      <i class="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li class="list-inline-item">
                      <a class="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 class="card-title">Lifestyle Archives</h4>
                  </a>
                  <p class="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a href="course-single.html" class="btn btn-primary btn-sm">
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /related course --> */}
    </>
  );
}
