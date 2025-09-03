import { Link } from "react-router-dom";
import { getInitials } from "../utils";

interface BrandLinkProps {
  name: string;
  designation: string;
  image?: string;
}

const BrandLink: React.FC<BrandLinkProps> = ({ name, designation, image }) => {
  const initials = getInitials(name);

  return (
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-15 h-15 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <span className="text-sm font-bold text-indigo">{initials}</span>
          )}
        </div>
        {!image && (
          <div className="absolute -inset-1 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
        )}
      </div>
      <div className="hidden sm:block">
        <span className="text-xl font-bold ">{name}</span>
        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {designation}
        </div>
      </div>
    </Link>
  );
};

export default BrandLink;
