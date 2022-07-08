const getStatus = (status: string) => {
  switch (status) {
    case "unchecked":
      return "bg-gray-200 dark:bg-gray-300";
    case "any-spot":
      return "bg-gray-600";
    case "wrong-spot":
      return "bg-yellow";
    case "correct-spot":
      return "bg-green";
    default:
      return "bg-gray-200  dark:bg-gray-300";
  }
};

export default getStatus;