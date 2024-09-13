const Job = (props) => {
  const { job } = props.location.state;
  //   console.log(props);

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Salary: {job.primary_details.Salary}</p>
    </div>
  );
};

export default Job;
