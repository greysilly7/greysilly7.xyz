{
  inputs = {
    systems.url = "github:nix-systems/default";
  };

  outputs = {
    nixpkgs,
    systems,
    ...
  } @ inputs: let
    eachSystem = f:
      nixpkgs.lib.genAttrs (import systems) (
        system:
          f nixpkgs.legacyPackages.${system}
      );
  in {
    packages = eachSystem (pkgs: {
      greysilly7-xyz = pkgs.stdenv.mkDerivation {
        name = "greysilly7-xyz";
        src = ./.; # Use the current directory as the source
        installPhase = ''
          mkdir -p $out
          cp -r ./* $out/
        '';
      };
    });

    devShells = eachSystem (pkgs: {
      default = pkgs.mkShell {
        buildInputs = with pkgs; [
          # Add development dependencies here
        ];
      };
    });
  };
}
