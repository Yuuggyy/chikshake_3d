-- PARAMÈTRES RESTAURANT Chik Shake
CREATE TABLE IF NOT EXISTS public.parametres (
  id             INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  nom_restaurant TEXT DEFAULT 'Chik Shake',
  logo_url       TEXT,
  adresse        TEXT DEFAULT 'Galleria Mall, 3ème étage, Avenue Colonel Lukasa, Gombe, Kinshasa',
  telephone      TEXT DEFAULT '+243 810 420 001',
  whatsapp       TEXT DEFAULT '243810420001',
  horaires       TEXT DEFAULT 'Tous les jours 10h00 - 22h00',
  updated_at     TIMESTAMPTZ DEFAULT NOW()
);
INSERT INTO public.parametres (id, nom_restaurant, adresse, telephone, whatsapp, horaires)
VALUES (1, 'Chik Shake', 'Galleria Mall, 3ème étage, Avenue Colonel Lukasa, Gombe, Kinshasa', '+243 810 420 001', '243810420001', 'Tous les jours 10h00 - 22h00')
ON CONFLICT (id) DO NOTHING;
CREATE TRIGGER trg_parametres_updated_at BEFORE UPDATE ON public.parametres FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
ALTER TABLE public.parametres ENABLE ROW LEVEL SECURITY;
CREATE POLICY "param_select" ON public.parametres FOR SELECT USING (true);
CREATE POLICY "param_update" ON public.parametres FOR UPDATE USING (auth.uid() IN (SELECT id FROM public.admin_profiles));
SELECT 'Chik Shake — paramètres OK' AS status;
