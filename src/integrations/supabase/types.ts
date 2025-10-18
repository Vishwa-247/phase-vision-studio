export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      action_verbs_reference: {
        Row: {
          alternatives: Json | null
          category: string
          created_at: string
          id: string
          strength_score: number
          verb: string
        }
        Insert: {
          alternatives?: Json | null
          category: string
          created_at?: string
          id?: string
          strength_score?: number
          verb: string
        }
        Update: {
          alternatives?: Json | null
          category?: string
          created_at?: string
          id?: string
          strength_score?: number
          verb?: string
        }
        Relationships: []
      }
      agent_logs: {
        Row: {
          agent_name: string
          course_id: string | null
          created_at: string | null
          id: string
          job_id: string | null
          log_level: string
          message: string
          metadata: Json | null
          user_id: string | null
        }
        Insert: {
          agent_name: string
          course_id?: string | null
          created_at?: string | null
          id?: string
          job_id?: string | null
          log_level?: string
          message: string
          metadata?: Json | null
          user_id?: string | null
        }
        Update: {
          agent_name?: string
          course_id?: string | null
          created_at?: string | null
          id?: string
          job_id?: string | null
          log_level?: string
          message?: string
          metadata?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_logs_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agent_logs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "course_generation_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      code_submissions: {
        Row: {
          attempt_id: string
          code: string
          created_at: string
          execution_time: number | null
          id: string
          language: string
          memory_used: number | null
          question_id: string
          status: string
          test_results: Json | null
          user_id: string
        }
        Insert: {
          attempt_id: string
          code: string
          created_at?: string
          execution_time?: number | null
          id?: string
          language?: string
          memory_used?: number | null
          question_id: string
          status?: string
          test_results?: Json | null
          user_id: string
        }
        Update: {
          attempt_id?: string
          code?: string
          created_at?: string
          execution_time?: number | null
          id?: string
          language?: string
          memory_used?: number | null
          question_id?: string
          status?: string
          test_results?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "code_submissions_attempt_id_fkey"
            columns: ["attempt_id"]
            isOneToOne: false
            referencedRelation: "exam_attempts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "code_submissions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "exam_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      course_chapters: {
        Row: {
          content: string
          course_id: string
          created_at: string
          estimated_reading_time: number | null
          id: string
          order_number: number
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          course_id: string
          created_at?: string
          estimated_reading_time?: number | null
          id?: string
          order_number: number
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          course_id?: string
          created_at?: string
          estimated_reading_time?: number | null
          id?: string
          order_number?: number
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_chapters_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_exams: {
        Row: {
          chapter_id: string | null
          course_id: string
          created_at: string
          difficulty: string
          duration_minutes: number
          exam_type: string
          id: string
          instructions: string | null
          title: string
          total_questions: number
          updated_at: string
        }
        Insert: {
          chapter_id?: string | null
          course_id: string
          created_at?: string
          difficulty?: string
          duration_minutes?: number
          exam_type: string
          id?: string
          instructions?: string | null
          title: string
          total_questions?: number
          updated_at?: string
        }
        Update: {
          chapter_id?: string | null
          course_id?: string
          created_at?: string
          difficulty?: string
          duration_minutes?: number
          exam_type?: string
          id?: string
          instructions?: string | null
          title?: string
          total_questions?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_exams_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "course_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_exams_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_flashcards: {
        Row: {
          answer: string
          chapter_id: string | null
          course_id: string
          created_at: string
          difficulty: string | null
          id: string
          question: string
        }
        Insert: {
          answer: string
          chapter_id?: string | null
          course_id: string
          created_at?: string
          difficulty?: string | null
          id?: string
          question: string
        }
        Update: {
          answer?: string
          chapter_id?: string | null
          course_id?: string
          created_at?: string
          difficulty?: string | null
          id?: string
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_flashcards_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "course_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_flashcards_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_generation_jobs: {
        Row: {
          completed_at: string | null
          course_id: string
          created_at: string | null
          current_step: string | null
          error_message: string | null
          id: string
          job_type: string
          metadata: Json | null
          progress_percentage: number | null
          started_at: string | null
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          course_id: string
          created_at?: string | null
          current_step?: string | null
          error_message?: string | null
          id?: string
          job_type: string
          metadata?: Json | null
          progress_percentage?: number | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          course_id?: string
          created_at?: string | null
          current_step?: string | null
          error_message?: string | null
          id?: string
          job_type?: string
          metadata?: Json | null
          progress_percentage?: number | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_generation_jobs_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_layouts: {
        Row: {
          course_id: string
          created_at: string
          estimated_duration: number | null
          id: string
          layout_data: Json
          total_chapters: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          course_id: string
          created_at?: string
          estimated_duration?: number | null
          id?: string
          layout_data?: Json
          total_chapters?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          course_id?: string
          created_at?: string
          estimated_duration?: number | null
          id?: string
          layout_data?: Json
          total_chapters?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_layouts_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_mcqs: {
        Row: {
          chapter_id: string | null
          correct_answer: string
          course_id: string
          created_at: string
          difficulty: string | null
          explanation: string | null
          id: string
          options: Json
          question: string
        }
        Insert: {
          chapter_id?: string | null
          correct_answer: string
          course_id: string
          created_at?: string
          difficulty?: string | null
          explanation?: string | null
          id?: string
          options: Json
          question: string
        }
        Update: {
          chapter_id?: string | null
          correct_answer?: string
          course_id?: string
          created_at?: string
          difficulty?: string | null
          explanation?: string | null
          id?: string
          options?: Json
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_mcqs_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "course_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_mcqs_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_notebooks: {
        Row: {
          analogy: string | null
          chapter_id: string | null
          course_id: string
          created_at: string
          id: string
          key_concepts: Json
          mind_map: Json | null
          study_guide: string | null
          updated_at: string
        }
        Insert: {
          analogy?: string | null
          chapter_id?: string | null
          course_id: string
          created_at?: string
          id?: string
          key_concepts?: Json
          mind_map?: Json | null
          study_guide?: string | null
          updated_at?: string
        }
        Update: {
          analogy?: string | null
          chapter_id?: string | null
          course_id?: string
          created_at?: string
          id?: string
          key_concepts?: Json
          mind_map?: Json | null
          study_guide?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_notebooks_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "course_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_notebooks_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_progress: {
        Row: {
          chapter_id: string | null
          completed_at: string
          course_id: string
          flashcard_id: string | null
          id: string
          mcq_id: string | null
          progress_type: string
          score: number | null
          time_spent: number | null
          user_id: string
        }
        Insert: {
          chapter_id?: string | null
          completed_at?: string
          course_id: string
          flashcard_id?: string | null
          id?: string
          mcq_id?: string | null
          progress_type: string
          score?: number | null
          time_spent?: number | null
          user_id: string
        }
        Update: {
          chapter_id?: string | null
          completed_at?: string
          course_id?: string
          flashcard_id?: string | null
          id?: string
          mcq_id?: string | null
          progress_type?: string
          score?: number | null
          time_spent?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_progress_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "course_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_progress_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_progress_flashcard_id_fkey"
            columns: ["flashcard_id"]
            isOneToOne: false
            referencedRelation: "course_flashcards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_progress_mcq_id_fkey"
            columns: ["mcq_id"]
            isOneToOne: false
            referencedRelation: "course_mcqs"
            referencedColumns: ["id"]
          },
        ]
      }
      course_qnas: {
        Row: {
          answer: string
          chapter_id: string | null
          course_id: string
          created_at: string
          id: string
          question: string
        }
        Insert: {
          answer: string
          chapter_id?: string | null
          course_id: string
          created_at?: string
          id?: string
          question: string
        }
        Update: {
          answer?: string
          chapter_id?: string | null
          course_id?: string
          created_at?: string
          id?: string
          question?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_qnas_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "course_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_qnas_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      course_resources: {
        Row: {
          chapter_id: string | null
          course_id: string
          created_at: string
          description: string | null
          duration: number | null
          id: string
          provider: string | null
          thumbnail_url: string | null
          title: string
          type: string
          url: string
        }
        Insert: {
          chapter_id?: string | null
          course_id: string
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: string
          provider?: string | null
          thumbnail_url?: string | null
          title: string
          type: string
          url: string
        }
        Update: {
          chapter_id?: string | null
          course_id?: string
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: string
          provider?: string | null
          thumbnail_url?: string | null
          title?: string
          type?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_resources_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "course_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_resources_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
        ]
      }
      courses: {
        Row: {
          completion_time_estimate: number | null
          created_at: string
          custom_prompt: string | null
          difficulty: string
          generation_job_id: string | null
          id: string
          include_exam_prep: boolean | null
          is_public: boolean | null
          progress_percentage: number | null
          purpose: string
          status: string
          summary: string | null
          tags: string[] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completion_time_estimate?: number | null
          created_at?: string
          custom_prompt?: string | null
          difficulty: string
          generation_job_id?: string | null
          id?: string
          include_exam_prep?: boolean | null
          is_public?: boolean | null
          progress_percentage?: number | null
          purpose: string
          status?: string
          summary?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completion_time_estimate?: number | null
          created_at?: string
          custom_prompt?: string | null
          difficulty?: string
          generation_job_id?: string | null
          id?: string
          include_exam_prep?: boolean | null
          is_public?: boolean | null
          progress_percentage?: number | null
          purpose?: string
          status?: string
          summary?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "courses_generation_job_id_fkey"
            columns: ["generation_job_id"]
            isOneToOne: false
            referencedRelation: "course_generation_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      dsa_favorites: {
        Row: {
          created_at: string
          id: string
          item_id: string
          item_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_id: string
          item_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          item_id?: string
          item_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dsa_feedbacks: {
        Row: {
          ai_resources: Json | null
          ai_suggestions: Json | null
          category: string
          created_at: string | null
          detailed_feedback: string | null
          difficulty: string
          id: string
          problem_id: string
          problem_name: string
          rating: number
          struggled_areas: string[] | null
          time_spent: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          ai_resources?: Json | null
          ai_suggestions?: Json | null
          category: string
          created_at?: string | null
          detailed_feedback?: string | null
          difficulty: string
          id?: string
          problem_id: string
          problem_name: string
          rating: number
          struggled_areas?: string[] | null
          time_spent?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          ai_resources?: Json | null
          ai_suggestions?: Json | null
          category?: string
          created_at?: string | null
          detailed_feedback?: string | null
          difficulty?: string
          id?: string
          problem_id?: string
          problem_name?: string
          rating?: number
          struggled_areas?: string[] | null
          time_spent?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      exam_attempts: {
        Row: {
          answers: Json
          completed_at: string | null
          course_id: string
          created_at: string
          exam_id: string
          id: string
          is_completed: boolean | null
          max_score: number | null
          score: number | null
          started_at: string
          time_spent: number | null
          user_id: string
        }
        Insert: {
          answers?: Json
          completed_at?: string | null
          course_id: string
          created_at?: string
          exam_id: string
          id?: string
          is_completed?: boolean | null
          max_score?: number | null
          score?: number | null
          started_at?: string
          time_spent?: number | null
          user_id: string
        }
        Update: {
          answers?: Json
          completed_at?: string | null
          course_id?: string
          created_at?: string
          exam_id?: string
          id?: string
          is_completed?: boolean | null
          max_score?: number | null
          score?: number | null
          started_at?: string
          time_spent?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exam_attempts_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exam_attempts_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "course_exams"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_questions: {
        Row: {
          code_template: string | null
          correct_answer: string
          course_id: string
          created_at: string
          difficulty: string
          exam_id: string
          explanation: string | null
          id: string
          marks: number
          options: Json | null
          question_text: string
          question_type: string
          tags: string[] | null
          test_cases: Json | null
        }
        Insert: {
          code_template?: string | null
          correct_answer: string
          course_id: string
          created_at?: string
          difficulty?: string
          exam_id: string
          explanation?: string | null
          id?: string
          marks?: number
          options?: Json | null
          question_text: string
          question_type?: string
          tags?: string[] | null
          test_cases?: Json | null
        }
        Update: {
          code_template?: string | null
          correct_answer?: string
          course_id?: string
          created_at?: string
          difficulty?: string
          exam_id?: string
          explanation?: string | null
          id?: string
          marks?: number
          options?: Json | null
          question_text?: string
          question_type?: string
          tags?: string[] | null
          test_cases?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "exam_questions_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exam_questions_exam_id_fkey"
            columns: ["exam_id"]
            isOneToOne: false
            referencedRelation: "course_exams"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_responses: {
        Row: {
          ai_analysis: Json | null
          audio_recording_path: string | null
          confidence_score: number | null
          created_at: string
          facial_analysis: Json | null
          id: string
          question_index: number
          question_text: string
          response_text: string | null
          response_time_seconds: number | null
          session_id: string
          user_id: string
          video_recording_path: string | null
        }
        Insert: {
          ai_analysis?: Json | null
          audio_recording_path?: string | null
          confidence_score?: number | null
          created_at?: string
          facial_analysis?: Json | null
          id?: string
          question_index: number
          question_text: string
          response_text?: string | null
          response_time_seconds?: number | null
          session_id: string
          user_id: string
          video_recording_path?: string | null
        }
        Update: {
          ai_analysis?: Json | null
          audio_recording_path?: string | null
          confidence_score?: number | null
          created_at?: string
          facial_analysis?: Json | null
          id?: string
          question_index?: number
          question_text?: string
          response_text?: string | null
          response_time_seconds?: number | null
          session_id?: string
          user_id?: string
          video_recording_path?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_responses_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_sessions: {
        Row: {
          completed_at: string | null
          created_at: string
          current_question_index: number | null
          experience_level: string | null
          feedback: Json | null
          id: string
          job_role: string | null
          max_possible_score: number | null
          questions_data: Json
          resume_id: string | null
          session_type: string
          started_at: string
          status: string
          tech_stack: string | null
          total_score: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          current_question_index?: number | null
          experience_level?: string | null
          feedback?: Json | null
          id?: string
          job_role?: string | null
          max_possible_score?: number | null
          questions_data?: Json
          resume_id?: string | null
          session_type: string
          started_at?: string
          status?: string
          tech_stack?: string | null
          total_score?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          current_question_index?: number | null
          experience_level?: string | null
          feedback?: Json | null
          id?: string
          job_role?: string | null
          max_possible_score?: number | null
          questions_data?: Json
          resume_id?: string | null
          session_type?: string
          started_at?: string
          status?: string
          tech_stack?: string | null
          total_score?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_sessions_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "user_resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_analytics: {
        Row: {
          action_type: string
          created_at: string
          id: string
          metadata: Json | null
          section_name: string | null
          user_id: string
        }
        Insert: {
          action_type: string
          created_at?: string
          id?: string
          metadata?: Json | null
          section_name?: string | null
          user_id: string
        }
        Update: {
          action_type?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          section_name?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      resume_analysis_history: {
        Row: {
          action_verb_score: number | null
          analysis_results: Json
          ats_score: number | null
          created_at: string
          file_name: string
          file_path: string
          id: string
          job_description: string | null
          job_role: string
          line_by_line_analysis: Json | null
          overall_score: number | null
          recommendations: Json | null
          star_methodology_score: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          action_verb_score?: number | null
          analysis_results?: Json
          ats_score?: number | null
          created_at?: string
          file_name: string
          file_path: string
          id?: string
          job_description?: string | null
          job_role: string
          line_by_line_analysis?: Json | null
          overall_score?: number | null
          recommendations?: Json | null
          star_methodology_score?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          action_verb_score?: number | null
          analysis_results?: Json
          ats_score?: number | null
          created_at?: string
          file_name?: string
          file_path?: string
          id?: string
          job_description?: string | null
          job_role?: string
          line_by_line_analysis?: Json | null
          overall_score?: number | null
          recommendations?: Json | null
          star_methodology_score?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      resume_extractions: {
        Row: {
          applied_at: string | null
          applied_by: string | null
          confidence_score: number | null
          created_at: string
          extracted_data: Json
          extraction_type: string
          id: string
          resume_id: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          applied_at?: string | null
          applied_by?: string | null
          confidence_score?: number | null
          created_at?: string
          extracted_data: Json
          extraction_type?: string
          id?: string
          resume_id?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          applied_at?: string | null
          applied_by?: string | null
          confidence_score?: number | null
          created_at?: string
          extracted_data?: Json
          extraction_type?: string
          id?: string
          resume_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "resume_extractions_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "user_resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      star_examples_reference: {
        Row: {
          action: string
          category: string
          created_at: string
          id: string
          industry: string | null
          result: string
          role_level: string | null
          situation: string
          task: string
        }
        Insert: {
          action: string
          category: string
          created_at?: string
          id?: string
          industry?: string | null
          result: string
          role_level?: string | null
          situation: string
          task: string
        }
        Update: {
          action?: string
          category?: string
          created_at?: string
          id?: string
          industry?: string | null
          result?: string
          role_level?: string | null
          situation?: string
          task?: string
        }
        Relationships: []
      }
      user_certifications: {
        Row: {
          created_at: string
          credential_id: string | null
          credential_url: string | null
          expiry_date: string | null
          id: string
          issue_date: string | null
          issuer: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          issuer: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          issuer?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_education: {
        Row: {
          created_at: string
          degree: string
          description: string | null
          end_year: string | null
          field_of_study: string
          grade: string | null
          id: string
          institution: string
          start_year: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          degree: string
          description?: string | null
          end_year?: string | null
          field_of_study: string
          grade?: string | null
          id?: string
          institution: string
          start_year?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          degree?: string
          description?: string | null
          end_year?: string | null
          field_of_study?: string
          grade?: string | null
          id?: string
          institution?: string
          start_year?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_experience: {
        Row: {
          company: string
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          is_current: boolean | null
          location: string | null
          position: string
          start_date: string
          technologies: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          company: string
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location?: string | null
          position: string
          start_date: string
          technologies?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          company?: string
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location?: string | null
          position?: string
          start_date?: string
          technologies?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          ai_suggestions: Json | null
          completion_percentage: number | null
          created_at: string
          email: string | null
          full_name: string | null
          github_url: string | null
          id: string
          last_ai_analysis: string | null
          linkedin_url: string | null
          location: string | null
          phone: string | null
          portfolio_url: string | null
          professional_summary: string | null
          profile_strength_score: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_suggestions?: Json | null
          completion_percentage?: number | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          github_url?: string | null
          id?: string
          last_ai_analysis?: string | null
          linkedin_url?: string | null
          location?: string | null
          phone?: string | null
          portfolio_url?: string | null
          professional_summary?: string | null
          profile_strength_score?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_suggestions?: Json | null
          completion_percentage?: number | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          github_url?: string | null
          id?: string
          last_ai_analysis?: string | null
          linkedin_url?: string | null
          location?: string | null
          phone?: string | null
          portfolio_url?: string | null
          professional_summary?: string | null
          profile_strength_score?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_projects: {
        Row: {
          created_at: string
          description: string | null
          end_date: string | null
          github_url: string | null
          highlights: string[] | null
          id: string
          live_url: string | null
          start_date: string | null
          technologies: string[] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          end_date?: string | null
          github_url?: string | null
          highlights?: string[] | null
          id?: string
          live_url?: string | null
          start_date?: string | null
          technologies?: string[] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          end_date?: string | null
          github_url?: string | null
          highlights?: string[] | null
          id?: string
          live_url?: string | null
          start_date?: string | null
          technologies?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_resumes: {
        Row: {
          ai_analysis: Json | null
          ai_suggestions: Json | null
          created_at: string
          extracted_text: string | null
          extraction_status: string | null
          file_path: string
          file_size: number | null
          file_type: string | null
          filename: string
          id: string
          processing_status: string | null
          recommendations: string[] | null
          skill_gaps: string[] | null
          storage_path: string | null
          updated_at: string
          upload_date: string
          user_id: string
        }
        Insert: {
          ai_analysis?: Json | null
          ai_suggestions?: Json | null
          created_at?: string
          extracted_text?: string | null
          extraction_status?: string | null
          file_path: string
          file_size?: number | null
          file_type?: string | null
          filename: string
          id?: string
          processing_status?: string | null
          recommendations?: string[] | null
          skill_gaps?: string[] | null
          storage_path?: string | null
          updated_at?: string
          upload_date?: string
          user_id: string
        }
        Update: {
          ai_analysis?: Json | null
          ai_suggestions?: Json | null
          created_at?: string
          extracted_text?: string | null
          extraction_status?: string | null
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          filename?: string
          id?: string
          processing_status?: string | null
          recommendations?: string[] | null
          skill_gaps?: string[] | null
          storage_path?: string | null
          updated_at?: string
          upload_date?: string
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          created_at: string | null
          gemini_api_key: string | null
          id: string
          preferred_difficulty: string | null
          preferred_language: string | null
          theme_preference: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          gemini_api_key?: string | null
          id?: string
          preferred_difficulty?: string | null
          preferred_language?: string | null
          theme_preference?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          gemini_api_key?: string | null
          id?: string
          preferred_difficulty?: string | null
          preferred_language?: string | null
          theme_preference?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_skills: {
        Row: {
          category: string
          created_at: string
          id: string
          level: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          level: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          level?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_profile_completion: {
        Args: { user_profile_id: string }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
