const TagButton = ({ href = "/blog", text }: { href?: string; text: string }) => {
  // Convert tag text to more readable format
  const getDisplayText = (tag: string) => {
    switch (tag) {
      case 'risk-management':
        return 'Risk Management';
      case 'business-continuity':
        return 'Business Continuity';
      case 'compliance':
        return 'Compliance';
      default:
        return tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ');
    }
  };

  return (
    <a
      href={href}
      className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-xs px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-white dark:hover:bg-primary"
    >
      {getDisplayText(text)}
    </a>
  );
};

export default TagButton;
