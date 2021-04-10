const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

export default function Timeline() {
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Started to Workout 6 days per week."></Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="The Pandemic started"></Step>
        <Step title="First contribution to a Cloud Native project."></Step>
        <Step title="Left Statsbomb to do Compulsory military service."></Step>
        <Step title="Started postgraduate Studies"></Step>
        <Step title="14 technical book in the first half of 2020"></Step>
        <Step title="DevOps Engineer @ Statsbomb"></Step>
        <Step title="A total of 25 book by the end of 2020"></Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Got promoted to a Senior Software Engineer."></Step>
        <Step title="Wrote an article for Towards Data Science"></Step>
        <Step title="Keynote speaker at Ainshams CV Conference"></Step>
        <Step title="Graduated from College"></Step>
        <Step title="Learned Apache beam, Apache kafka & DDD"></Step>
        <Step title="Go (again), k8s, Terraform, AWS & Cloud Native."></Step>
        <Step title="Engaged to my best friend."></Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Data Scientist @ Arqamfc(pre SB acquisition)"></Step>
        <Step title="Shifted Back to Software Engineer."></Step>
        <Step title="Got introduced to Functional programming."></Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Dropped out of school for a year."></Step>
        <Step title="First Startup + Remote experience @ Floraltyics"></Step>
        <Step title="Used Luigi, Elasticsearch, Mongodb and Azure."></Step>
        <Step title="Deployed my first NLP and vision models to production."></Step>
      </ul>

      <Divider />
      <Year>2016</Year>
      <ul>
        <Step title="Ranked 6th in ACM-ASU contest."></Step>
        <Step title="Left Fulltime for the lack of mentorship."></Step>
        <Step title="Second internship @ ABMegypt"></Step>
        <Step title="Joined the same team Full time Engineer."></Step>
        <Step title="Used Go, Docker, Jenkins, Postgres, Redis and AWS."></Step>
        <Step title="First open source contribution."></Step>
      </ul>
      <Divider />
      <Year>2015</Year>
      <ul>
        <Step title="Ranked 7th in the first year of college"></Step>
        <Step title="First summer Internship @ABMegypt"></Step>
        <Step title="Learned Python."></Step>
        <Step title="First Fulltime job @ Tajjer"></Step>
        <Step title="Wrote PHP, JS, SQL and Bash for the 1st time"></Step>
      </ul>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Step title="Started Computer Science @ Ainshams Uni."></Step>
      </ul>
    </>
  );
}
