import React from 'react';
import resumeFile from '../documents/resume.pdf';
const AboutUs = ({ classicHeader, darkTheme }) => {
	return (
		<section
			id='about'
			className={'section ' + (darkTheme ? 'bg-dark-1' : '')}
		>
			<div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
				{/* Heading */}
				<div className='position-relative d-flex text-center mb-5'>
					<h2
						className={
							'text-24  text-uppercase fw-600 w-100 mb-0 ' +
							(darkTheme
								? 'text-muted opacity-1'
								: 'text-light opacity-4')
						}
					>
						About Me
					</h2>
					<p
						className={
							'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
							(darkTheme ? 'text-white' : 'text-dark')
						}
					>
						Know Me More
						<span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
					</p>
				</div>
				{/* Heading end*/}
				<div className='row gy-5'>
					{/* About me content start */}
					<div className='col-lg-7 col-xl-8 text-center text-lg-start'>
						<h2
							className={
								'text-7 fw-600 mb-3 ' +
								(darkTheme ? 'text-white' : '')
							}
						>
							I'm{' '}
							<span className='text-primary'>
								Jerome Checketts,
							</span>{' '}
							a Web Developer
						</h2>
						<p className={darkTheme ? 'text-white-50' : ''}>
							As a web developer, I bring a unique set of skills
							and experience to any project. With my technical
							expertise, creative thinking, and problem-solving
							abilities, I can write clean, efficient, and
							maintainable code that can handle the demands of
							modern web applications. I have experience working
							with multiple programming languages and frameworks,
							which allows me to choose the best tool for each
							project.
						</p>
						<p className={darkTheme ? 'text-white-50' : ''}>
							Whether it's freelance work or a full-time position,
							I am confident that I can make a valuable
							contribution to any team. I have a keen eye for
							detail and a passion for delivering high-quality
							solutions that exceed expectations. I am a strong
							communicator and can work collaboratively with
							others to achieve project goals. As a dedicated
							professional, I am always looking for ways to
							improve my skills and stay up-to-date with the
							latest industry trends and best practices. With my
							expertise and commitment, I can help organizations
							achieve their web development goals and take their
							digital presence to the next level.
						</p>
					</div>
					{/* About me content end */}
					{/* about me personal detials start */}
					<div className='col-lg-5 col-xl-4'>
						<div className='ps-lg-4'>
							<ul
								className={
									'list-style-2 ' +
									(darkTheme
										? 'list-style-light text-light'
										: '')
								}
							>
								<li>
									<span className='fw-600 me-2'>Name:</span>
									Jerome Checketts
								</li>
								<li>
									<span className='fw-600 me-2'>Email:</span>
									<a href='mailto:jeromechecketts@gmail.com'>
										jerome@jeromechecketts.dev
									</a>
								</li>
								<li>
									<span className='fw-600 me-2'>Age:</span>40
								</li>
								<li className='border-0'>
									<span className='fw-600 me-2'>From:</span>
									Uvalde, Texas
								</li>
							</ul>
							<a
								href={resumeFile}
								download
								className='btn btn-primary rounded-pill'
							>
								Download CV
							</a>
						</div>
					</div>
					{/* about me personal details end */}
				</div>
				{/* projects rewards counting start */}
				{/* <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>650</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div>
          </div>
        </div> */}
				{/* projects rewards counting end */}
			</div>
		</section>
	);
};

export default AboutUs;
