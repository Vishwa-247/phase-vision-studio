import Layout from "@/components/layout/Layout";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { InterviewProvider } from "@/context/InterviewContext";
import Auth from "@/pages/Auth";
import CompanyProblems from "@/pages/CompanyProblems";
import CourseDetailNew from "@/pages/CourseDetailNew";
import CourseGenerator from "@/pages/CourseGenerator";
import Courses from "@/pages/Courses";
import Dashboard from "@/pages/Dashboard";
import DebugPage from "@/pages/DebugPage";
import DSASheet from "@/pages/DSASheet";
import DSATopic from "@/pages/DSATopic";
import FutureIntegrations from "@/pages/FutureIntegrations";
import Index from "@/pages/Index";
import InterviewResult from "@/pages/InterviewResult";
import MockInterview from "@/pages/MockInterview";
import NotFound from "@/pages/NotFound";
import ProfileBuilder from "@/pages/ProfileBuilder";
import ResumeAnalyzer from "@/pages/ResumeAnalyzer";
import Settings from "@/pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Layout><Index /></Layout>} />
            
            {/* Course Routes */}
            <Route path="/courses" element={
              <Layout>
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="/course-generator" element={
              <Layout>
                <ProtectedRoute>
                  <CourseGenerator />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="/course/:id" element={
              <Layout>
                <ProtectedRoute>
                  <CourseDetailNew />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="/settings" element={
              <Layout>
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              </Layout>
            } />
            
            <Route path="/dsa-sheet" element={
              <Layout>
                <ProtectedRoute>
                  <DSASheet />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="dsa-sheet/topic/:topicId" element={
              <Layout>
                <ProtectedRoute>
                  <DSATopic />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="dsa-sheet/company/:companyId" element={
              <Layout>
                <ProtectedRoute>
                  <CompanyProblems />
                </ProtectedRoute>
              </Layout>
            } />
            <Route 
              path="mock-interview"
              element={
                <Layout>
                  <ProtectedRoute>
                    <InterviewProvider>
                      <MockInterview />
                    </InterviewProvider>
                  </ProtectedRoute>
                </Layout>
              } 
            />
            <Route path="interview-result/:id" element={
              <Layout>
                <ProtectedRoute>
                  <InterviewResult />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="dashboard" element={
              <Layout>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="profile-builder" element={
              <Layout>
                <ProtectedRoute>
                  <ProfileBuilder />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="resume-analyzer" element={
              <Layout>
                <ProtectedRoute>
                  <ResumeAnalyzer />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="api/*" element={<div>API Proxy</div>} />
            <Route path="future-integrations" element={
              <Layout>
                <ProtectedRoute>
                  <FutureIntegrations />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="debug" element={
              <Layout>
                <ProtectedRoute>
                  <DebugPage />
                </ProtectedRoute>
              </Layout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
