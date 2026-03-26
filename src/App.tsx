import avatarImg from "./assets/images/avatar-jessica.jpeg";

interface SocialLink {
  id: number;
  platform: string;
  url: string;
}

interface UserProfile {
  name: string;
  location: string;
  profession: string;
  avatar: string;
}

const App = () => {
  const user: UserProfile = {
    avatar: avatarImg,
    name: "Jessica Randall",
    location: "London, United Kingdom",
    profession: `"Front-end developer and avid reader."`,
  };
  const links: SocialLink[] = [
    { id: 1, platform: "GitHub", url: "https://github.com" },
    { id: 2, platform: "Frontend Mentor", url: "https://frontendmentor.io" },
    { id: 3, platform: "LinkedIn", url: "https://linkedin.com" },
    { id: 4, platform: "Twitter", url: "https://twitter.com" },
    { id: 5, platform: "Instagram", url: "https://instagram.com" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center text-white bg-grey-900 p-4">
      <div className="bg-grey-800 p-8 rounded-xl max-w-95 w-full text-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-22 h-22 rounded-full mx-auto mb-6"
        />
        <h1 className="text-white text-2xl font-semibold">{user.name}</h1>
        <p className="text-lime-green text-sm font-medium mt-2">
          {user.location}
        </p>

        <p className="text-white/70 my-6">{user.profession}</p>

        <div className="flex flex-col gap-6 ">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="bg-grey-700 py-3 rounded-lg font-semibold hover:bg-lime-green hover:text-grey-900 focus:bg-lime-green focus:text-grey-900 focus:outline-none transition-all"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
