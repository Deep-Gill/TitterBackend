PGDMP  
                    |           postgres    14.13    16.4 
    1           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            2           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            3           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            4           1262    13823    postgres    DATABASE     s   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE postgres;
                root    false            5           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   root    false    3380                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                root    false            6           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   root    false    4            �            1259    16410    users    TABLE     �   CREATE TABLE public.users (
    username text NOT NULL,
    password text NOT NULL,
    email text,
    role smallint DEFAULT 0 NOT NULL,
    date date NOT NULL
);
    DROP TABLE public.users;
       public         heap    root    false    4            .          0    16410    users 
   TABLE DATA                 public          root    false    209   �       �           2606    16417    users users_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            root    false    209            .   �   x���Qk�0 �w���lI2]{�`2�Q���;=T5ſ��������%���r��IxJ!:�1��K��n��kX��fz�2���/<�&��}'�u���ϗ��0����\ܸEUc��8�zn{.i��]c2�$���<p7ONt3�+�z��$@2*��=�f�W+J��4e���_�F�$h��i*�p�=���`�÷�X�8\�Cpn�"�A!ج(+�]����_`&�f��� ��R     