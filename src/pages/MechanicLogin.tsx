import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench } from "lucide-react";
import mechanicIllustration from "@/assets/mechanic-illustration.jpg";
import { toast } from "sonner";

const MechanicLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation for demo
    if (email && password) {
      toast.success("Login successful!");
      navigate("/mechanic-dashboard");
    } else {
      toast.error("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-center text-white">
          <img
            src={mechanicIllustration}
            alt="Mechanic with tools"
            className="w-full h-auto rounded-2xl shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">Join Our Team of Experts</h2>
          <p className="text-white/90 text-lg">
            Manage your jobs, track earnings, and build your reputation with FixMyRide
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
            <Link to="/" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-6">
              <Wrench className="h-6 w-6" />
              <span className="font-bold text-xl">FixMyRide</span>
            </Link>
          </div>

          <Card className="shadow-lg border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Mechanic Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="mechanic@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-lg"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full rounded-lg" size="lg">
                  Login
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Not a mechanic yet?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Apply now
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicLogin;
