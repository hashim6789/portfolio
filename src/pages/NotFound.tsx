import { AnimatedContainer, Button, FloatingElement } from "../components/ui";
import { ArrowLeft, Compass, Home, Star, Zap } from "lucide-react";

const NotFound: React.FC = () => {
  const handleGoHome = (): void => {
    window.location.href = "/";
  };

  const handleGoBack = (): void => {
    window.history.back();
  };

  return (
    <div className="min-h-screen ">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <FloatingElement delay={0} className="absolute top-20 left-20">
          <Star className="w-6 h-6 text-indigo-400/60" />
        </FloatingElement>
        <FloatingElement delay={1000} className="absolute top-40 right-32">
          <Zap className="w-8 h-8 text-indigo-400/60" />
        </FloatingElement>
        <FloatingElement delay={2000} className="absolute bottom-32 left-32">
          <Compass className="w-7 h-7 text-indigo-300/60" />
        </FloatingElement>
        <FloatingElement delay={1500} className="absolute bottom-20 right-20">
          <Star className="w-5 h-5 text-indigo-300/60" />
        </FloatingElement>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Number */}
          <AnimatedContainer>
            <div className="relative mb-8">
              <h1 className="text-[12rem] md:text-[16rem] font-bold">404</h1>
              <div className="absolute inset-0 text-[12rem] md:text-[16rem] font-bold text-indigo-600/20 blur-sm leading-none select-none">
                404
              </div>
            </div>
          </AnimatedContainer>

          {/* Error Message */}
          <AnimatedContainer delay={200} className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the
              digital void. Don't worry though, even the best explorers
              sometimes take a wrong turn!
            </p>
          </AnimatedContainer>

          {/* Action Buttons */}
          <AnimatedContainer
            delay={600}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button onClick={handleGoHome} size="lg">
              <div className="flex justify-center gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </div>
            </Button>
            <Button onClick={handleGoBack} variant="outline" size="lg">
              <div className="flex justify-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </div>
            </Button>
          </AnimatedContainer>

          {/* Error Code */}
          <AnimatedContainer delay={1200} className="mt-8">
            <p className=" text-sm font-mono">
              Error Code: 404 | Page Not Found | Time:
              {new Date().toLocaleTimeString()}
            </p>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
