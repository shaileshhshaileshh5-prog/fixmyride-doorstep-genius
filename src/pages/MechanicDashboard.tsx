import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Briefcase,
  DollarSign,
  User,
  LogOut,
  CheckCircle,
  Clock,
  Wrench,
} from "lucide-react";
import { toast } from "sonner";

const MechanicDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/mechanic-login");
  };

  const stats = [
    { label: "Total Jobs Completed", value: "156", icon: CheckCircle, color: "text-green-600" },
    { label: "Pending Jobs", value: "8", icon: Clock, color: "text-yellow-600" },
    { label: "Total Earnings", value: "₹1,24,500", icon: DollarSign, color: "text-blue-600" },
  ];

  const jobs = [
    {
      id: 1,
      customer: "Rajesh Kumar",
      service: "Engine Oil Change",
      location: "Indiranagar, Bangalore",
      date: "2025-01-15",
      status: "pending",
    },
    {
      id: 2,
      customer: "Priya Sharma",
      service: "Brake Repair",
      location: "Koramangala, Bangalore",
      date: "2025-01-15",
      status: "pending",
    },
    {
      id: 3,
      customer: "Amit Patel",
      service: "General Service",
      location: "Whitefield, Bangalore",
      date: "2025-01-14",
      status: "completed",
    },
    {
      id: 4,
      customer: "Sneha Reddy",
      service: "Battery Replacement",
      location: "HSR Layout, Bangalore",
      date: "2025-01-14",
      status: "completed",
    },
  ];

  const recentPayments = [
    { date: "2025-01-14", amount: "₹1,500", job: "General Service" },
    { date: "2025-01-14", amount: "₹800", job: "Battery Replacement" },
    { date: "2025-01-13", amount: "₹600", job: "Oil Change" },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-6 hidden lg:block">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <Wrench className="h-6 w-6" />
            <span className="font-bold text-xl">FixMyRide</span>
          </Link>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "dashboard"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            <LayoutDashboard className="h-5 w-5" />
            <span className="font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab("jobs")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "jobs"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            <Briefcase className="h-5 w-5" />
            <span className="font-medium">Jobs</span>
          </button>
          <button
            onClick={() => setActiveTab("earnings")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "earnings"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            <DollarSign className="h-5 w-5" />
            <span className="font-medium">Earnings</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "profile"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            <User className="h-5 w-5" />
            <span className="font-medium">Profile</span>
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-destructive/10 text-destructive transition-colors mt-auto absolute bottom-6"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <div className="bg-card border-b border-border p-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              {activeTab === "dashboard" && "Dashboard"}
              {activeTab === "jobs" && "Jobs"}
              {activeTab === "earnings" && "Earnings"}
              {activeTab === "profile" && "Profile"}
            </h1>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  MK
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="font-medium">Mechanic Kumar</p>
                <p className="text-sm text-muted-foreground">Professional Mechanic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                        <stat.icon className={`h-12 w-12 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Jobs */}
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Recent Jobs</CardTitle>
                  <CardDescription>Your latest job assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobs.slice(0, 3).map((job) => (
                        <TableRow key={job.id}>
                          <TableCell className="font-medium">{job.customer}</TableCell>
                          <TableCell>{job.service}</TableCell>
                          <TableCell>{job.location}</TableCell>
                          <TableCell>{job.date}</TableCell>
                          <TableCell>
                            <Badge
                              variant={job.status === "completed" ? "default" : "secondary"}
                            >
                              {job.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {job.status === "pending" ? (
                              <Button size="sm" className="rounded-md">
                                Accept
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" className="rounded-md">
                                View
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "jobs" && (
            <div className="animate-fade-in">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>All Jobs</CardTitle>
                  <CardDescription>Manage your job assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobs.map((job) => (
                        <TableRow key={job.id}>
                          <TableCell className="font-medium">{job.customer}</TableCell>
                          <TableCell>{job.service}</TableCell>
                          <TableCell>{job.location}</TableCell>
                          <TableCell>{job.date}</TableCell>
                          <TableCell>
                            <Badge
                              variant={job.status === "completed" ? "default" : "secondary"}
                            >
                              {job.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {job.status === "pending" ? (
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  className="rounded-md"
                                  onClick={() => toast.success("Job accepted!")}
                                >
                                  Accept
                                </Button>
                              </div>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                className="rounded-md"
                                onClick={() => toast.info("Job details viewed")}
                              >
                                View
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "earnings" && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Total Earnings</CardTitle>
                    <CardDescription>Your lifetime earnings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-primary">₹1,24,500</p>
                  </CardContent>
                </Card>
                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>This Month</CardTitle>
                    <CardDescription>January 2025 earnings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold text-green-600">₹8,900</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Recent Payments</CardTitle>
                  <CardDescription>Your latest transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPayments.map((payment, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
                      >
                        <div>
                          <p className="font-medium">{payment.job}</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                        <p className="text-lg font-bold text-green-600">{payment.amount}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="animate-fade-in">
              <Card className="shadow-md max-w-2xl">
                <CardHeader>
                  <CardTitle>Mechanic Profile</CardTitle>
                  <CardDescription>Your profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                        MK
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Mechanic Kumar</h3>
                      <p className="text-muted-foreground">Professional Mechanic</p>
                      <div className="flex gap-2 mt-2">
                        <Badge>Certified</Badge>
                        <Badge variant="secondary">5+ Years Experience</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-medium">mechanic@example.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-medium">+91 98765 43210</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">Bangalore, Karnataka</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Rating</p>
                      <p className="font-medium">4.8 ⭐ (156 reviews)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Engine Repair</Badge>
                      <Badge variant="outline">Brake Systems</Badge>
                      <Badge variant="outline">Electrical</Badge>
                      <Badge variant="outline">Transmission</Badge>
                      <Badge variant="outline">AC Repair</Badge>
                    </div>
                  </div>

                  <Button className="rounded-lg">Edit Profile</Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MechanicDashboard;
