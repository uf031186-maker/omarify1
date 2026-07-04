"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";

interface Project {
  id: string;
  name: string;
  status: "planning" | "in-progress" | "review" | "completed";
  progress: number;
  updated_at: string;
  description: string;
}

const statusColors: Record<string, string> = {
  planning: "#f59e0b",
  "in-progress": "#14a800",
  review: "#8b5cf6",
  completed: "#10b981",
};

const statusLabels: Record<string, string> = {
  planning: "Planning",
  "in-progress": "In Progress",
  review: "Under Review",
  completed: "Completed",
};

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/portal/login");
        return;
      }
      setUser(user);

      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("client_id", user.id)
        .order("updated_at", { ascending: false });

      if (data) setProjects(data);
      setLoading(false);
    }
    loadData();
  }, [router, supabase]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/portal/login");
  }

  if (loading) {
    return (
      <div className="w-full max-w-4xl">
        <div className="text-center py-20">
          <div className="inline-block w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: "var(--text-accent)", borderTopColor: "transparent" }} />
          <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>Loading your projects...</p>
        </div>
      </div>
    );
  }

  const displayName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Client";

  return (
    <div className="w-full max-w-4xl py-12">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
            Welcome back, {displayName}
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            Here&apos;s the latest on your projects
          </p>
        </div>
        <button onClick={handleLogout} className="btn-outline text-sm !px-4 !py-2">
          Sign Out
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="card p-12 text-center" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}>
          <div className="text-4xl mb-4">📋</div>
          <h2 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
            No projects yet
          </h2>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Once we start working together, your project details and progress will show up here.
          </p>
          <a href="/#contact" className="btn-primary inline-block">
            Start a Project
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card p-6"
              style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)" }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                    {project.name}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    color: statusColors[project.status],
                    background: `${statusColors[project.status]}15`,
                    border: `1px solid ${statusColors[project.status]}30`,
                  }}
                >
                  {statusLabels[project.status]}
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span style={{ color: "var(--text-muted)" }}>Progress</span>
                  <span style={{ color: "var(--text-accent)" }}>{project.progress}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${project.progress}%`,
                      background: `linear-gradient(90deg, #14a800, #91e564)`,
                    }}
                  />
                </div>
              </div>

              <p className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                Last updated: {new Date(project.updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 pt-6 text-center" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <a href="/" className="text-xs" style={{ color: "var(--text-muted)" }}>
          ← Back to website
        </a>
      </div>
    </div>
  );
}
