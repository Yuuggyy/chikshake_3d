-- ── SEED PRODUITS : Chic Shake ──────────────────────────────
INSERT INTO public.restaurants (nom, slug)
VALUES ('Chic Shake', 'chikshake')
ON CONFLICT (slug) DO NOTHING;

DO $$
DECLARE rid UUID;
BEGIN
  SELECT id INTO rid FROM public.restaurants WHERE slug = 'chikshake';
  INSERT INTO public.produits (restaurant_id, nom, description, prix, categorie, disponible) VALUES
    (rid, 'Crispy Chicken Box 4pcs', '4 morceaux poulet croustillant, epices uniques', 10.00, 'Poulet Croustillant', true),
    (rid, 'Crispy Chicken Box 8pcs', '8 morceaux poulet croustillant', 18.00, 'Poulet Croustillant', true),
    (rid, 'Crispy Chicken Sandwich', 'Filet croustillant, sauce maison, pain brioche', 9.00, 'Poulet Croustillant', true),
    (rid, 'Ailes Croustillantes x6', 'Ailes epicees, sauce buffalo ou ranch', 10.00, 'Poulet Croustillant', true),
    (rid, 'Ailes Croustillantes x12', 'Grand format ailes croustillantes', 18.00, 'Poulet Croustillant', true),
    (rid, 'Crispy Strips x5', 'Lanieres de poulet croustillantes', 9.00, 'Poulet Croustillant', true),
    (rid, 'Cheese Burger Chicken', 'Filet poulet croustillant, cheddar, sauce maison', 9.00, 'Burgers', true),
    (rid, 'Cheese Burger Beef', 'Steak boeuf, double cheddar, cornichons', 10.00, 'Burgers', true),
    (rid, 'Double Smash Burger', 'Double patty boeuf, sauce signature Chic Shake', 13.00, 'Burgers', true),
    (rid, 'Spicy Burger', 'Steak epice, jalapeños, sauce piquante', 9.50, 'Burgers', true),
    (rid, 'Milkshake Vanille', 'Lait, glace vanille, creme fouettee', 6.00, 'Milkshakes', true),
    (rid, 'Milkshake Chocolat', 'Lait, glace chocolat, sauce chocolat', 6.00, 'Milkshakes', true),
    (rid, 'Milkshake Fraise', 'Lait, glace fraise, coulis fraise', 6.00, 'Milkshakes', true),
    (rid, 'Milkshake Oreo', 'Lait, glace vanille, biscuits Oreo ecrases', 7.00, 'Milkshakes', true),
    (rid, 'Milkshake Caramel Beurre Sale', 'Lait, glace vanille, caramel beurre sale', 7.00, 'Milkshakes', true),
    (rid, 'Combo Crispy 4pcs', 'Box 4pcs + frites + boisson', 15.00, 'Combos', true),
    (rid, 'Combo Burger + Shake', 'Burger au choix + milkshake au choix', 16.00, 'Combos', true),
    (rid, 'Combo Famille', 'Box 12pcs + frittes x2 + boissons x4', 35.00, 'Combos', true),
    (rid, 'Frittes Dorees', 'Pommes de terre frites, sel fin', 3.00, 'Accompagnements', true),
    (rid, 'Onion Rings x6', 'Rondelles d oignon panees dorees', 4.00, 'Accompagnements', true),
    (rid, 'Coleslaw', 'Salade de chou cremeuse maison', 2.50, 'Accompagnements', true),
    (rid, 'Sauce Dip Supplementaire', 'Ranch, buffalo, barbecue ou curry', 1.00, 'Accompagnements', true),
    (rid, 'Coca Cola 33cl', NULL, 2.50, 'Boissons', true),
    (rid, 'Fanta ou Sprite 33cl', NULL, 2.50, 'Boissons', true),
    (rid, 'Jus de Fruit Frais', 'Mangue, passion, ananas', 3.50, 'Boissons', true),
    (rid, 'Eau Minerale 75cl', NULL, 2.00, 'Boissons', true)
  ON CONFLICT DO NOTHING;
END $$;
