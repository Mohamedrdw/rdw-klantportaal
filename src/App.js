import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, FileText, ClipboardList, LogIn } from "lucide-react";

const RDWKlantportaal = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setLoggedIn(true);
    }
  };

  if (!loggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Card className="p-6 w-96 text-center shadow-md">
          <h2 className="text-xl font-semibold mb-4">Log in bij RDW Klantportaal</h2>
          <Input type="text" placeholder="Gebruikersnaam" value={username} onChange={(e) => setUsername(e.target.value)} />
          <Input type="password" placeholder="Wachtwoord" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button className="mt-4 w-full" onClick={handleLogin}>
            <LogIn className="mr-2" /> Inloggen
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welkom, {username}!</h1>
    </div>
  );
};

export default RDWKlantportaal;
