export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <main>
      <h1>Perfil - User: {params.user}</h1>
    </main>
  );
}
