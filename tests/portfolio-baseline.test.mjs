import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const home = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const contact = readFileSync(new URL('../src/pages/contacto.astro', import.meta.url), 'utf8');
const listing = readFileSync(new URL('../src/pages/propiedades/index.astro', import.meta.url), 'utf8');

test('RED/hero: CTAs route to existing properties and contact pages, never #', () => {
  assert.match(home, /href="\/propiedades"[\s\S]{0,300}Ver propiedades\s*<\/a>/);
  assert.match(home, /href="\/contacto"[\s\S]{0,300}Contactanos\s*<\/a>/);
});

test('RED/demo: home and listing clearly mark properties/prices as examples', () => {
  assert.match(home, /sitio demostrativo/i);
  assert.match(listing, /propiedades ficticias/i);
});

test('RED/contact: contact page neither solicits messages nor publishes fictional phone/email', () => {
  assert.match(contact, /sitio demostrativo/i);
  assert.doesNotMatch(contact, /<form\b/i);
  assert.doesNotMatch(contact, /<button[^>]*>\s*Enviar mensaje/i);
  assert.doesNotMatch(contact, /51999999999|999 999 999|contacto@andeshabitat\.pe/i);
});
