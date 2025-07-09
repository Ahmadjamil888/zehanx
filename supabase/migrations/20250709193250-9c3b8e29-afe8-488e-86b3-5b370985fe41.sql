
-- Create a table for contact messages
CREATE TABLE public.messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public readable for admin purposes
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert messages (for contact form)
CREATE POLICY "Anyone can submit contact messages" 
  ON public.messages 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that only authenticated users can read messages (for admin)
CREATE POLICY "Only authenticated users can read messages" 
  ON public.messages 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
