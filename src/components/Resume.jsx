import React from 'react';
import resumeFile from '../documents/resume.pdf';

const Resume = ({ classicHeader, darkTheme }) => {
	const educationDetails = [
		{
			yearRange: '2023',
			title: 'FullStack Web & Mobile App Dev',
			place: 'Nucamp Coding Bootcamp',
			desc: 'Learned the necessary skills to become a proficient web developer, including front-end development using HTML, CSS, and JavaScript, as well as back-end development using Node.js, Express, and MongoDB.',
		},
		{
			yearRange: '2022 - 2023',
			title: 'Backend, Python, SQL and DevOps',
			place: 'NuCamp Coding Bootcamp',
			desc: 'Learned data structures and algorithms to build robust applications with Python and SQL. Used DevOps tools to deploy to the cloud platforms.',
		},
		{
			yearRange: '2008 - 2010',
			title: 'Associates Degree',
			place: 'Utah Valley University',
			desc: 'Through my pursuit of a General Studies Associates degree from Utah Valley University, I gained a well-rounded education in diverse subject areas.',
		},
		{
			yearRange: '2006 - 2008',
			title: 'Associates Degree',
			place: 'ITT Technical Institute',
			desc: 'My Associates degree in Computer Aided Drafting and Design from ITT Tech equipped me with comprehensive skills in drafting and designing using industry-standard software like AutoCAD and SolidWorks.',
		},
	];

	// const experienceDetails = [
	//   {
	//     yearRange: "2012 - 2013",
	//     title: "Jr. UI UX Designer",
	//     place: "Themeforest",
	//     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
	//   },
	//   {
	//     yearRange: "2014 - 2016",
	//     title: "Jr. Product Designer",
	//     place: "Dribbble",
	//     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
	//   },
	//   {
	//     yearRange: "2017 - 2019",
	//     title: "Product Designer",
	//     place: "Adobe",
	//     desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
	//   },
	// ];

	const skills = [
		{
			name: 'Web Design',
		},
		{
			name: 'HTML',
		},
		{
			name: 'CSS',
		},
		{
			name: 'JavaScript',
		},
		{
			name: 'React.js',
		},
		{
			name: 'React Native',
		},
		{
			name: 'Redux',
		},
		{
			name: 'Node.js',
		},
		{
			name: 'Bootstrap',
		},
		{
			name: 'Python',
		},
		{
			name: 'SQL',
		},
		{
			name: 'PostgreSQL',
		},
		{
			name: 'MongoDB',
		},
		{
			name: 'Git',
		},
		{
			name: 'GitHub',
		},
		{
			name: 'Docker',
		},
	];

	return (
		<section
			id='resume'
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
						Summary
					</h2>
					<p
						className={
							'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
							(darkTheme ? 'text-white' : 'text-dark')
						}
					>
						{' '}
						Resume
						<span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
					</p>
				</div>
				{/* Heading end*/}
				<div className='row gx-5 d-flex'>
					{/* My Education */}
					<div className='col-md-12'>
						<h2
							className={
								'text-center text-6 fw-600 mb-4 ' +
								(darkTheme ? 'text-white' : '')
							}
						>
							My Education
						</h2>
						<div className='row justify-content-around mb-5'>
							{educationDetails.length > 0 &&
								educationDetails.map((value, index) => (
									<div
										key={index}
										className={
											'mt-4 col-md-5 bg-white rounded p-3 mb-4 ' +
											(darkTheme
												? 'bg-dark'
												: 'bg-white border')
										}
									>
										<p className='badge bg-primary text-2 fw-400'>
											{value.yearRange}
										</p>
										<h3
											className={
												'text-5 ' +
												(darkTheme ? 'text-white' : '')
											}
										>
											{value.title}
										</h3>
										<p
											className={
												darkTheme
													? 'text-primary'
													: 'text-danger'
											}
										>
											{value.place}
										</p>
										<p
											className={
												'mb-0 ' +
												(darkTheme
													? 'text-white-50'
													: '')
											}
										>
											{value.desc}
										</p>
									</div>
								))}
						</div>
					</div>
					{/* My Experience */}
					{/* <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div> */}
				</div>
				{/* My Skills */}
				<h2
					className={
						'text-center text-6 fw-600 mt-4 mb-4 ' +
						(darkTheme ? 'text-white' : '')
					}
				>
					My Skills
				</h2>
				<div className='row gx-5 d-flex pl-3'>
					{skills.length > 0 &&
						skills.map((skill, index) => (
							<div
								key={index}
								className='col-md-3 justify-content-around'
							>
								<p
									className={
										' fw-500 text-start mb-2 ' +
										(darkTheme ? 'text-light' : 'text-dark')
									}
								>
									{skill.name}{' '}
									{/* <span className="float-end">{skill.percent}%</span> */}
								</p>
								{/* <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div> */}
							</div>
						))}
				</div>
				<div className='text-center mt-5'>
					<a
						className='btn btn-outline-secondary rounded-pill shadow-none'
						href={resumeFile}
						download
					>
						Download Resume
						<span className='ms-1'>
							<i className='fas fa-download' />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Resume;
